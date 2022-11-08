import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.css']
})
export class FilterResultComponent implements OnInit {

  @Input() countries: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
