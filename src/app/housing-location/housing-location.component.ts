import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
