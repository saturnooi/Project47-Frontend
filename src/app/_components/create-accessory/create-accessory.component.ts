import { Component, NgModule, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';

@Component({
  selector: 'app-create-accessory',
  templateUrl: './create-accessory.component.html',
})
export class CreateAccessoryComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<CreateAccessoryComponent>
    | undefined;

  imageURL: string = '';
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }

  async createRecord(): Promise<void> {
    await this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }

  showPreview(event: Event) {
    const element = event.currentTarget as HTMLInputElement
    const files = element?.files
    console.log(files)
    if (files) {
      this.uploadForm.patchValue({
        avatar: files[0]
      });
      this.uploadForm.get('avatar')?.updateValueAndValidity()
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      reader.readAsDataURL(files[0])
    }
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  declarations: [CreateAccessoryComponent],
})
export class NewsletterComponentModule { }
