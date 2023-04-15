import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { quillConfig } from '@app/constants/defaultValue';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { HttpClient } from '@angular/common/http';
import { SaveimgeService } from 'src/app/services/saveimge/saveimge.service';
import * as S3 from 'aws-sdk/clients/s3';
import * as AWS from 'aws-sdk';
@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
})
export class CreateNewsComponent implements OnInit {
  ngOnInit() {
    this.uploadForm = new FormGroup({ editor: new FormControl(null) });
  }
  @ViewChild('editor') editor: any;

  imageURL: string = '';
  blured = false;
  focused = false;

  fileToUpload: any = null;
  uploadForm: FormGroup;

  content: any = '<p>Testing</p>';
  hasFocus = false;

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
  onbSubmit = () => {
    const encodedContent = JSON.stringify(this.uploadForm.get('editor')?.value);
    console.log(encodedContent);
  };

  constructor(
    public fb: FormBuilder,
    private saveimgeService: SaveimgeService
  ) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: [''],
    });
    // this.modules = quillConfig
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
    // console.log(this.fileToUpload);
  }

  onUpload(): void {
    if (this.fileToUpload) {
      this.saveToDigitalOcean()
        .then((imageUrl: any) => {
          console.log(`Image URL: ${imageUrl}`);
          // Do something with the uploaded image URL
        })
        .catch((err: any) => {
          // console.error(err);
          // Handle the error
        });
    } else {
      console.error('No file selected');
      // Handle the error
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

  saveToDigitalOcean() {
    // console.log(fileToUpload);
    return new Promise((resolve, reject) => {
      const spacesEndpoint = new AWS.Endpoint('sgp1.digitaloceanspaces.com');
      const s3 = new S3({
        endpoint: spacesEndpoint,
        accessKeyId: 'DO00WX7E9PZJ2GW7JEUT',
        secretAccessKey: 'rrD/Ns8sDwUUkgSpef/U7TFEoiShdjcMgbDVUvlENog',
        region: 'sgp1',
        signatureVersion: 'v4',
      });

      const filename = this.fileToUpload.name;
      const params = {
        Bucket: 'project-47',
        Key: filename,
        Body: this.fileToUpload,
      };

      s3.upload(params, (err: any, data: any) => {
        console.log(`Image uploaded to ${data}`);
        resolve(data);
      });
    });
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
}
