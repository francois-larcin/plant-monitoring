import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PlantMeasurement } from '../../../models/interfaces/plant-measurement-interface';
import { Plant } from '../../../models/interfaces/plant-interface';
import { PlantService } from '../../../service/plant-service';
import { SoilMoistureStatus } from '../../../models/enums/soil-moisture-status-enum';
import { LightStatus } from '../../../models/enums/light-status-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-detail',
  imports: [CommonModule],
  templateUrl: './plant-detail.html',
  styleUrl: './plant-detail.css',
})
export class PlantDetail {
  @Input() plantId!: string;
  @Output() close = new EventEmitter<void>();

  plant: Plant | undefined;
  measurements: PlantMeasurement[] = [];
  loading = false;
  error: string | null = null;

  private _plantService = inject(PlantService);

  ngOnInit(): void {
    this.loadPlantData();
  }

  onClose(): void {
    this.close.emit();
  }

  public formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  public loadMeasurements(): void {
    this._plantService.getMeasurementsByPlantId(this.plantId).subscribe({
      next: (measurements) => {
        this.measurements = measurements;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading measurements:', err);
        this.error = "Impossible de charger l'historique des mesures";
        this.loading = false;
      },
    });
  }

  public getLightStatusClass(status: LightStatus): string {
    switch (status) {
      case LightStatus.Ok:
        return 'status-good';
      case LightStatus.Low:
        return 'status-warning';
      case LightStatus.High:
        return 'status-medium';
      default:
        return '';
    }
  }

  public getSoilMoistureStatusClass(status: SoilMoistureStatus): string {
    switch (status) {
      case SoilMoistureStatus.Medium:
        return 'status-good';
      case SoilMoistureStatus.Low:
        return 'status-warning';
      case SoilMoistureStatus.High:
        return 'status-medium';
      default:
        return '';
    }
  }

  public refresh(): void {
    this.loadMeasurements();
  }

  private loadPlantData(): void {
    this.loading = true;
    this.error = null;

    //? 1) Charge the plant infos
    this._plantService.getById(this.plantId).subscribe({
      next: (plant) => {
        this.plant = plant;
      },
      error: (err) => {
        console.error('Error loading plant:', err);
        this.error = 'Impossible de charger les informations de la plante';
        this.loading = false;
      },
    });

    //? 2) Charge measurements history
    this.loadMeasurements();
  }
}
