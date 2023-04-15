import { Component } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'combine';
  constructor(private http: HttpClient) { }
  onFileSelected(event:any) {
    const file = event.target.files[0];
    this.uploadFile(file);
  }
  uploadFile(file: File) {
  const url = 'https://project-47.sgp1.digitaloceanspaces.com'; // replace with your server URL
  const formData = new FormData();
  formData.append('file', file, file.name);

  const headers = new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  });

  const options = {
    headers: headers
  };

  this.http.post(url, formData, options)
    .subscribe(response => {
      console.log('Upload successful:', response);
    }, error => {
      console.error('Upload error:', error);
    });
}
}
