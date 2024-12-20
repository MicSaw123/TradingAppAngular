import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTransactionComponent } from './existing-transaction.component';

describe('ExistingTransactionComponent', () => {
  let component: ExistingTransactionComponent;
  let fixture: ComponentFixture<ExistingTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExistingTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
