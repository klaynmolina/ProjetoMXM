import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharComponent } from './detalhar.component';

describe('DetalharComponent', () => {
  let component: DetalharComponent;
  let fixture: ComponentFixture<DetalharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalharComponent]
    });
    fixture = TestBed.createComponent(DetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
