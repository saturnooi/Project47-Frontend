import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { educationList } from 'src/app/constants/defaultValue';
import { IDentistEducation } from 'src/app/models/user/dentist';

@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css'],
})
export class StaffProfileComponent {
  active: number = 0;
  isAddNewEducation: boolean = false;
  educations: IDentistEducation[] = educationList;
  uploadForm!: FormGroup;
  imageURL: string = '';

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      profile: [null],
    });
  }

  onActiveChange(index: string | number) {
    this.active = Number(index);
    this.isAddNewEducation = false;
  }

  onAddNewEducation() {
    this.isAddNewEducation = true;
  }

  onCancelAddNewEducation() {
    this.isAddNewEducation = false;
  }

  showPreview(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    const files = element?.files;
    console.log(files);
    if (files) {
      this.uploadForm.patchValue({
        avatar: files[0],
      });
      this.uploadForm.get('avatar')?.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      };
      reader.readAsDataURL(files[0]);
    }
  }
}
