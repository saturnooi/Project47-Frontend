import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class SaveimgeService {
  constructor() {}

  saveToDigitalOcean(fileToUpload: any) {
    // console.log(fileToUpload);
    return new Promise((resolve, reject) => {
      const s3 = new S3({
        endpoint: '.sgp1.digitaloceanspaces.com',
        accessKeyId: 'DO00WX7E9PZJ2GW7JEUT',
        secretAccessKey: 'LlvvFXRWi1r7OEZh+zqDiNcHvqoZt9HaBMUNQuHdmJc',
      });
      console.log(fileToUpload.name);
      const filename = fileToUpload.name;
      const params = {
        Bucket: 'project-47',
        Key: filename,
        Body: fileToUpload,
      };
      console.log(params);
      s3.upload(params, (err: any, data: any) => {
        console.log(`Image uploaded to ${data}`);
        resolve(data);
      });
    });
  }
}
