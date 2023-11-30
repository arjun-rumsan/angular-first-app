import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';
  readonly formUrl = 'http://localhost:4000/form';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  async submitApplication(
    userId: number,
    firstName: string,
    lastName: string,
    email: string
  ) {
    const response = await fetch(`${this.formUrl}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userId,
        firstName,
        lastName,
        email,
      }),
    });
    console.log(
      '🚀 ~ file: housing.service.ts:28 ~ HousingService ~ submitApplication ~ response:',
      response
    );
  }
}
