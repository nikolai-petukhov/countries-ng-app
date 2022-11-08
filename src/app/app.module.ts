import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { FilterResultItemComponent } from './filter-result-item/filter-result-item.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterResultComponent,
    FilterResultItemComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
