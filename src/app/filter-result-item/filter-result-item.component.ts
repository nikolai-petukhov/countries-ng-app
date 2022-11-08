import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-result-item',
  templateUrl: './filter-result-item.component.html',
  styleUrls: ['./filter-result-item.component.css']
})
export class FilterResultItemComponent implements OnInit {

  @Input() country: any = null;
  showCountry: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showCountryHandler(): void {
    this.showCountry = !this.showCountry;
  }

}
