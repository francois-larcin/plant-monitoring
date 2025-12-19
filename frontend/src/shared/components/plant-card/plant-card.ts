import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../../../models/interfaces/plant-interface';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-plant-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './plant-card.html',
  styleUrl: './plant-card.css',
})
export class PlantCard {
  @Input() plant!: Plant;
  @Output() select = new EventEmitter<string>();

  onClick() {
    this.select.emit(this.plant.id);
  }
}
