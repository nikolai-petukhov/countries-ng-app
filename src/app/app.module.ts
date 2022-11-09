import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterResultComponent } from './components/filter-result/filter-result.component';
import { FilterResultItemComponent } from './components/filter-result-item/filter-result-item.component';
import { CountryComponent } from './components/country/country.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterResultComponent,
    FilterResultItemComponent,
    CountryComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
