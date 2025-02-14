import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocations: HousingLocation[] = [];
  filteredLocations: HousingLocation[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.housingService.getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocations = housingLocationList;
        this.filteredLocations = housingLocationList;
        this.cdr.detectChanges();
      });
  }

  filterResults(query: string): void {
    if (!query) {
      this.filteredLocations = this.housingLocations;
      return;
    }

    this.filteredLocations = this.housingLocations.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
