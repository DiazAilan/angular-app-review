import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common/';

  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number;
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  
  formBuilder = inject(FormBuilder);
  
  applyForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }

  submitApplication(): void {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
