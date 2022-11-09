import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: any = null;
  weather: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.country.name.common}&units=metric&appid=${environment.APP_API_KEY}`)
      .subscribe(data => this.weather = data);
  }

}
