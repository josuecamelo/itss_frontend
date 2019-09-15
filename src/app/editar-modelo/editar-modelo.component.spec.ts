import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModeloComponent } from './editar-modelo.component';

describe('EditarModeloComponent', () => {
  let component: EditarModeloComponent;
  let fixture: ComponentFixture<EditarModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
