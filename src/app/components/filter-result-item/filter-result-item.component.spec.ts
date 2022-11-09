import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResultItemComponent } from './filter-result-item.component';

describe('FilterResultItemComponent', () => {
  let component: FilterResultItemComponent;
  let fixture: ComponentFixture<FilterResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterResultItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
