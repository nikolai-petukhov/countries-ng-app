import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterString: string = '';
  countries: any[] = [];
  countriesToShow: any[] = [];

  ngOnInit(): void {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => this.countries = response.data);
  }

  setCountriesToShow(): void {
    this.countriesToShow = this.filterString 
      ? this.countries.filter(country => country.name.common.toLowerCase().includes(this.filterString))
      : [];
    console.log(this.countriesToShow)
  }
}
