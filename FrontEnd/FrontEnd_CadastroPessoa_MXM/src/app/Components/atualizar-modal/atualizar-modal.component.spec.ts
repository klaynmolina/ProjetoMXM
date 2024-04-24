import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarModalComponent } from './atualizar-modal.component';

describe('AtualizarModalComponent', () => {
  let component: AtualizarModalComponent;
  let fixture: ComponentFixture<AtualizarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarModalComponent]
    });
    fixture = TestBed.createComponent(AtualizarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
