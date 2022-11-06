import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNewUserComponent } from './confirm-new-user.component';

describe('ConfirmNewUserComponent', () => {
  let component: ConfirmNewUserComponent;
  let fixture: ComponentFixture<ConfirmNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmNewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
