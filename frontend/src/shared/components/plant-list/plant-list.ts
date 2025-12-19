import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../../../models/interfaces/plant-interface';
import { PlantCard } from '../plant-card/plant-card';

@Component({
  selector: 'app-plant-list',
  imports: [PlantCard],
  templateUrl: './plant-list.html',
  styleUrl: './plant-list.css',
})
export class PlantList {
  @Input() plants: Plant[] = [];
  @Output() plantSelected = new EventEmitter<string>();

  onPlantSelect(plantId: string): void {
    this.plantSelected.emit(plantId);
  }
}
