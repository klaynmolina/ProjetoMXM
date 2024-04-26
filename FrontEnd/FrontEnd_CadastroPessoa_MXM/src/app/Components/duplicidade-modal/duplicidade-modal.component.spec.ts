import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicidadeModalComponent } from './duplicidade-modal.component';

describe('DuplicidadeModalComponent', () => {
  let component: DuplicidadeModalComponent;
  let fixture: ComponentFixture<DuplicidadeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuplicidadeModalComponent]
    });
    fixture = TestBed.createComponent(DuplicidadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
