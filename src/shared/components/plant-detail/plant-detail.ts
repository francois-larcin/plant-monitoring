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

  private _plantService = inject(PlantService);

  ngOnInit(): void {
    this.plant = this._plantService.getById(this.plantId);
    this.loadMeasurements();
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

  public loadMeasurements(): void {
    this.measurements = this._plantService.getMeasurementsByPlantId(
      this.plantId
    );
  }
}
