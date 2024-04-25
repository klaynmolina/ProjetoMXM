import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAtualizarComponent } from './formulario-atualizar.component';

describe('FormularioAtualizarComponent', () => {
  let component: FormularioAtualizarComponent;
  let fixture: ComponentFixture<FormularioAtualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAtualizarComponent]
    });
    fixture = TestBed.createComponent(FormularioAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
