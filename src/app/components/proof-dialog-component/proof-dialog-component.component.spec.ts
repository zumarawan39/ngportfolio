import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofDialogComponentComponent } from './proof-dialog-component.component';

describe('ProofDialogComponentComponent', () => {
  let component: ProofDialogComponentComponent;
  let fixture: ComponentFixture<ProofDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProofDialogComponentComponent]
    });
    fixture = TestBed.createComponent(ProofDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
