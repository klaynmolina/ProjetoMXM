import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoComponent } from './alteracao.component';

describe('AlteracaoComponent', () => {
  let component: AlteracaoComponent;
  let fixture: ComponentFixture<AlteracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlteracaoComponent]
    });
    fixture = TestBed.createComponent(AlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
