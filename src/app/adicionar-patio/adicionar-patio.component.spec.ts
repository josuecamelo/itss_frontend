import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPatioComponent } from './adicionar-patio.component';

describe('AdicionarPatioComponent', () => {
  let component: AdicionarPatioComponent;
  let fixture: ComponentFixture<AdicionarPatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarPatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
