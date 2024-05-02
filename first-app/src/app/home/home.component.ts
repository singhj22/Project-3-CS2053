import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousinglocationComponent],
  template: `
    <section class="results">
      <app-housinglocation *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"></app-housinglocation>
    </section>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
