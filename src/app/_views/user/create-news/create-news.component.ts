import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { quillConfig } from '@app/constants/defaultValue';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
})
export class CreateNewsComponent {
  @ViewChild('editor') editor: any;

  imageURL: string = ''
  blured = false
  focused = false
  modules = {}
  content = ''

  uploadForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
    this.modules = quillConfig
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

  created(event: Event) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection | Event) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blured = false
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blured = true
  }

}
