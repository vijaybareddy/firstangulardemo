import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurntComponent } from './restaurnt.component';

describe('RestaurntComponent', () => {
  let component: RestaurntComponent;
  let fixture: ComponentFixture<RestaurntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
