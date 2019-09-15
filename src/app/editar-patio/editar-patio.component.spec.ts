import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPatioComponent } from './editar-patio.component';

describe('EditarPatioComponent', () => {
  let component: EditarPatioComponent;
  let fixture: ComponentFixture<EditarPatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
