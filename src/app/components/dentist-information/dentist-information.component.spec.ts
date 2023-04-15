import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistInformationComponent } from './dentist-information.component';

describe('DentistInformationComponent', () => {
  let component: DentistInformationComponent;
  let fixture: ComponentFixture<DentistInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentistInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
