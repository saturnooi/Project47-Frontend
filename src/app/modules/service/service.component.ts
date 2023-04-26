import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SaveimgeService } from 'src/app/services/saveimge/saveimge.service';
import { AuthService } from 'src/app/services/auth/auth-service.service';
interface Product {
  image: string | Error;
  title: string;
  description: string;
  price: number;
  unit: string;
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  title = '';
  description = '';
  image: any = '';
  price = 0;
  unit = '';

  isStaff: boolean = false;

  services:any = [];
  selectedFile?: any;
  apiUrl?: string;
  product: Product = {
    image: '',
    title: '',
    description: '',
    price: 0,
    unit: '',
  };

  showModal = false;

  constructor(
    private http: HttpClient,
    private saveimgService: SaveimgeService,
    authService: AuthService
  ) {
    this.apiUrl = environment.apiUrl;
    this.isStaff = authService.isStaff();
    this.apiUrl = environment.apiUrl;
    this.http.get<any>(`${this.apiUrl}/clinic-services`).subscribe({
      next: (data) => {
        this.services = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  async onSubmit() {
    console.log(this.selectedFile);

    const url = await this.saveimgService.uploadFile(
      this.selectedFile,
      'service'
    );

    const service: Product = {
      image: url,
      title: this.title,
      description: this.description,
      price: this.price,
      unit: this.unit,
    };
    this.http
      .post<Product>(`${this.apiUrl}/clinic-services`, service)
      .subscribe({
        next: (res) => {
          this.http.get<any>(`${this.apiUrl}/clinic-services`).subscribe({
            next: (data) => {
              this.services = data;
            },
            error: (error) => {
              console.log(error);
            },
          });
          this.closeModal();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
}
