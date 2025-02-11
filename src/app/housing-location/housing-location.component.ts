import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common/';

  @Input() housingLocation!: HousingLocation;
}
