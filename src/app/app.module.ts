import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { FilterResultComponent } from './filter-result/filter-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
