import { Component, inject } from '@angular/core';
import { Plant } from '../../models/interfaces/plant-interface';
import { PlantService } from '../../service/plant-service';
import { PlantList } from '../../shared/components/plant-list/plant-list';
import { PlantDetail } from "../../shared/components/plant-detail/plant-detail";

@Component({
  selector: 'app-plant-dashboard',
  imports: [PlantList, PlantDetail],
  templateUrl: './plant-dashboard.html',
  styleUrl: './plant-dashboard.css',
})
export class PlantDashboardComponent {
  plants: Plant[] = [];
  selectedPlantId: string | null = null;

  private _plantService = inject(PlantService);

  ngOnInit(): void {
    this.plants = this._plantService.getAll();
  }

  public onCloseDetail(): void {
    this.selectedPlantId = null;
  }

  public onPlantSelected(plantId: string): void {
    this.selectedPlantId = plantId;
  }
}
