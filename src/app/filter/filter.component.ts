import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() filterInputValue: string = '';
  @Output() filterInputValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterInputHandler(searchValue: string): void {
    this.filterInputValue = searchValue;
    this.filterInputValueChange.emit(this.filterInputValue);
  }

}
