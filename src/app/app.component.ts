import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterString: string = '';
  countries: any = [];
  countriesToShow: any[] = [];

  constructor (private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries()
      .subscribe(data => this.countries = data);
  }

  setCountriesToShow(): void {
    this.countriesToShow = this.filterString 
      ? this.countries.filter((country: any) => country.name.common.toLowerCase().includes(this.filterString))
      : [];
  }
}
