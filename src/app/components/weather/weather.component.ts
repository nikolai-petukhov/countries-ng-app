import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() countryName: string = '';
  @Input() weather: any = null;
  weatherIcon: string = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`;

  constructor() { }

  ngOnInit(): void {
    console.log(this.weather)    
  }

}
