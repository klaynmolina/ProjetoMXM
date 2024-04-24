import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesativarModalComponent } from './desativar-modal.component';

describe('DesativarModalComponent', () => {
  let component: DesativarModalComponent;
  let fixture: ComponentFixture<DesativarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesativarModalComponent]
    });
    fixture = TestBed.createComponent(DesativarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
