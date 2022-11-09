import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getWeather(countryName: string) {
    return this.http
              .get(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=${environment.APP_API_KEY}`);
  }
}
