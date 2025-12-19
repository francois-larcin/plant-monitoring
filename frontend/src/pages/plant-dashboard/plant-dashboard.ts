import { Component, inject } from '@angular/core';
import { Plant } from '../../models/interfaces/plant-interface';
import { PlantService } from '../../service/plant-service';
import { PlantList } from '../../shared/components/plant-list/plant-list';
import { PlantDetail } from '../../shared/components/plant-detail/plant-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-dashboard',
  imports: [CommonModule, PlantList, PlantDetail],
  templateUrl: './plant-dashboard.html',
  styleUrl: './plant-dashboard.css',
})
export class PlantDashboardComponent {
  plants: Plant[] = [];
  selectedPlantId: string | null = null;
  loading = false;
  error: string | null = null;

  private _plantService = inject(PlantService);

  ngOnInit(): void {
    this.loadPlants();
  }

  private loadPlants(): void {
    this.loading = true;
    this.error = null;

    //? 1) Get the list of plantIDs
    this._plantService.getAll().subscribe({
      next: (plants) => {
        //? 2) For each plant, change its last measurement
        plants.forEach((plant) => {
          this._plantService.getById(plant.id).subscribe({
            next: (fullPlant) => {
              if (fullPlant) {
                //? Check if the plant already exists in the array
                const index = this.plants.findIndex((p) => p.id === plant.id);

                if (index >= 0) {
                  //? Update the existing plant
                  this.plants[index] = fullPlant;
                } else {
                  //? Add the new plant
                  this.plants.push(fullPlant);
                }
              }
            },
            error: (err) => {
              console.error(`Error loading plant ${plant.id}:`, err);
            },
          });
        });

        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading plants:', err);
        this.error =
          'Impossible de charger les plantes. Vérifiez que le backend est lancé';
        this.loading = false;
      },
    });
  }

  public onCloseDetail(): void {
    this.selectedPlantId = null;
  }

  public onPlantSelected(plantId: string): void {
    this.selectedPlantId = plantId;
  }

  public refresh(): void {
    this.plants = [];
    this.loadPlants();
  }
}
