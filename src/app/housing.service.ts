import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import housingLocationsMock from '../mockups/housingLocations.json';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocations: HousingLocation[] = housingLocationsMock;

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocations;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocations.find(housingLocation => housingLocation.id === id);
  }
}
