import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivarModalComponent } from './ativar-modal.component';

describe('AtivarModalComponent', () => {
  let component: AtivarModalComponent;
  let fixture: ComponentFixture<AtivarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtivarModalComponent]
    });
    fixture = TestBed.createComponent(AtivarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
