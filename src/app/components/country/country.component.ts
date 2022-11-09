import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: any = null;
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather(this.country.name.common)
      .subscribe(data => this.weather = data);
  }

}
