import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCorComponent } from './adicionar-cor.component';

describe('AdicionarCorComponent', () => {
  let component: AdicionarCorComponent;
  let fixture: ComponentFixture<AdicionarCorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarCorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
