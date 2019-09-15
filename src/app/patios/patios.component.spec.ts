import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiosComponent } from './patios.component';

describe('PatiosComponent', () => {
  let component: PatiosComponent;
  let fixture: ComponentFixture<PatiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
