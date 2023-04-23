import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { quillConfig } from '@app/constants/defaultValue';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { HttpClient } from '@angular/common/http';
import { SaveimgeService } from 'src/app/services/saveimge/saveimge.service';
import * as S3 from 'aws-sdk/clients/s3';
import * as AWS from 'aws-sdk';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
})
export class CreateNewsComponent implements OnInit {
  ngOnInit() {
    this.uploadForm = new FormGroup({
      topic: new FormControl(null),
      editor: new FormControl(null),
    });
    console.log('Hi');
  }
  @ViewChild('editor') editor: any;

  imageURL: string | Error = '';
  blured = false;
  focused = false;

  fileToUpload: any = null;
  uploadForm: FormGroup;

  content: any = '';
  hasFocus = false;

  isUploadImg: boolean = false;
  isUploadimgError: boolean = false;
  showError: boolean = false;
  errorMessage: string = '';

  atValues = [
    { id: 1, value: 'Fredrik Sundqvist', link: 'https://google.com' },
    { id: 2, value: 'Patrik Sjölin' },
  ];
  hashValues = [
    { id: 3, value: 'Fredrik Sundqvist 2' },
    { id: 4, value: 'Patrik Sjölin 2' },
  ];

  modules = {
    //toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['code-block'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ font: [] }],
        [{ align: [] }],

        ['clean'], // remove formatting button

        ['link'],
        ['link', 'image', 'video'],
        //  ['emoji'],
      ],
      //   handlers: {'emoji': function() {}}
    },
  };

  constructor(
    public fb: FormBuilder,
    private saveimgeService: SaveimgeService,
    private http: HttpClient,
    private router: Router
  ) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: [''],
    });
    // this.modules = quillConfig
  }
  // "emoji-toolbar": true,
  // "emoji-textarea": false,
  // "emoji-shortname": true,

  onSelectionChanged = (event: any) => {
    if (event.oldRange == null) {
      this.onFocus();
    }
    if (event.range == null) {
      this.onBlur();
    }
  };

  onContentChanged = (event: any) => {
    //console.log(event.html);
  };

  onFocus = () => {
    console.log('On Focus');
  };
  onBlur = () => {
    console.log('Blurred');
  };

  async onbSubmit() {
    if (!this.isUploadImg) await this.onUpload();
    const topic = JSON.stringify(this.uploadForm.get('editor')?.value);
    const encodedContent = JSON.stringify(this.uploadForm.get('editor')?.value);
    if (!topic || !encodedContent || !this.fileToUpload) {
      this.showError = true;
      this.errorMessage = 'กรุณากรอกข้อมูลให้ครบถ้วน';
    } else {
      const topic = this.uploadForm.get('topic')?.value;
      const encodedContent = this.uploadForm.get('editor')?.value;
      const ployload = {
        topic: topic,
        img: this.imageURL,
        content: encodedContent,
      };
      this.http.post(`${environment.apiUrl}/blog`, ployload).subscribe({
        next: (response) => {
          this.router.navigate(['/blog']);
        },
        error: (error) => {
          this.showError = true;
          this.errorMessage = 'ไม่สามารถสร้างข่าวได้';
        },
      });
    }
    console.log(this.uploadForm);
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
    const fileName = event.target.files[0].name;
    const labelElement = event.target.parentElement;
    const labelDiv = labelElement.querySelector('div');
    labelDiv.textContent = fileName;
    this.isUploadImg = false;
  }

  async onUpload() {
    try {
      const url = await this.saveimgeService.uploadFile(
        this.fileToUpload,
        'blog'
      );
      this.isUploadImg = true;
      if (typeof this.imageURL === 'string') {
        this.imageURL = url;
      }
      console.log('File uploaded:', url);

      // do something with the URL, such as displaying the uploaded image
    } catch (error) {
      this.isUploadimgError = true;
      this.showError = true;
      if (!this.fileToUpload) this.errorMessage = 'กรุณาเลือกไฟล์';
      else this.errorMessage = 'ไม่สามารถ Upload ไฟล์ได้';
      console.error('Error uploading file:', error);

      // handle the error, such as displaying an error message to the user
    }
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

  created(event: Event) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event);
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection | Event) {
    // tslint:disable-next-line:no-console
    // const html = event.html
    console.log(event);
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event);
    this.focused = true;
    this.blured = false;
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event);
    this.focused = false;
    this.blured = true;
  }

  closeError() {
    this.showError = false;
    console.log(this.showError);
  }
}
