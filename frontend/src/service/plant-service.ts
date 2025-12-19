import { Injectable } from '@angular/core';
import { Plant } from '../models/interfaces/plant-interface';

import { PlantMeasurement } from '../models/interfaces/plant-measurement-interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private apiUrl = 'http://localhost:3000/api/measurements';

  //? HttpClient injection for HTTP requests
  constructor(private http: HttpClient) {}

  getAll(): Observable<Plant[]> {
    return this.http.get<string[]>(`${this.apiUrl}/plants`).pipe(
      map((plantIds) => {
        return plantIds.map((id) => ({
          id,
          name: this.formatPlantName(id),
          species: 'Unknown',
          imageUrl: `/plants-image/${id.split('-')[0]}.webp`,
        }));
      })
    );
  }

  getById(id: string): Observable<Plant | undefined> {
    return this.http
      .get<PlantMeasurement>(`${this.apiUrl}/plant/${id}/latest`)
      .pipe(
        map((measurement) => {
          if (!measurement) return undefined;

          return {
            id,
            name: this.formatPlantName(id),
            species: 'Unknown',
            imageUrl: `/plants-image/${id.split('-')[0]}.webp`,
            lastMeasurement: measurement,
          };
        })
      );
  }

  getMeasurementsByPlantId(plantId: string): Observable<PlantMeasurement[]> {
    return this.http
      .get<PlantMeasurement[]>(`${this.apiUrl}/plant/${plantId}`)
      .pipe(
        map((measurement) =>
          measurement.sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
        )
      );
  }

  getAllMeasurements(): Observable<PlantMeasurement[]> {
    return this.http.get<PlantMeasurement[]>(this.apiUrl);
  }

  private formatPlantName(plantId: string): string {
    // "basilic-01" → "Basilic"
    const name = plantId.split('-')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
