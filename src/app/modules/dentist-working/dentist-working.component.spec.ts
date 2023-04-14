import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistWorkingComponent } from './dentist-working.component';

describe('DentistWorkingComponent', () => {
  let component: DentistWorkingComponent;
  let fixture: ComponentFixture<DentistWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentistWorkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
