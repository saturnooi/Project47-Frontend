import { Injectable } from '@angular/core';

import * as S3 from 'aws-sdk/clients/s3';
import { environment } from 'src/environments/environment';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root',
})
export class SaveimgeService {
  constructor() {}

  uploadFile(file: File, folder: string): Promise<string | Error> {
    return new Promise<string>((resolve, reject) => {
      const spacesEndpoint = new AWS.Endpoint(
        `${environment.awsEndpoint}/${folder}`
      );
      const s3 = new S3({
        endpoint: spacesEndpoint,

        accessKeyId: environment.awsAccessKeyId,
        secretAccessKey: environment.awsSecretAccessKey,

        region: environment.awsRegion,
      });

      const params = {
        Bucket: environment.bucket,
        Key: file.name,
        Body: file,
        ACL: 'public-read',
        ContentType: 'image/jpg',
      };

      s3.upload(params, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(
            `https://${environment.bucket}.sgp1.digitaloceanspaces.com/${folder}/${file.name}`
          );
        }
      });
    });
  }
}
