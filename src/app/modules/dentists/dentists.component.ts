import { Component } from '@angular/core';
import { dentistLists } from 'src/app/constants/defaultValue';
import { IDentist, IDentistDetail } from 'src/app/models/user/dentist';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.css']
})
export class DentistsComponent {
  dentistList: IDentist[] = dentistLists;
}
