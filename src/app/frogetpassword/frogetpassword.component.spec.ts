import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogetpasswordComponent } from './frogetpassword.component';

describe('FrogetpasswordComponent', () => {
  let component: FrogetpasswordComponent;
  let fixture: ComponentFixture<FrogetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrogetpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrogetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
