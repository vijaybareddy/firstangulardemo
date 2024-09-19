import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFromComponent } from './otp-from.component';

describe('OtpFromComponent', () => {
  let component: OtpFromComponent;
  let fixture: ComponentFixture<OtpFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtpFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
