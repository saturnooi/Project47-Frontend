import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
interface Product {
  image: string;
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
  services = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Service 1',
      description: 'This is the description for Service 1',
      price: 10,
      unit: 'per hour',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Service 2',
      description: 'This is the description for Service 2',
      price: 20,
      unit: 'per session',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Service 3',
      description: 'This is the description for Service 3',
      price: 30,
      unit: 'per month',
    },
  ];
  selectedFile?: any;
  apiUrl?: string;
  product: Product = {
    image: '',
    title: '',
    description: '',
    price: 0,
    unit: ''
  };

  showModal = false;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    this.http.post<Product>(`${this.apiUrl}/products`, this.product)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.closeModal();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  onFileSelected(files: FileList): void {
    this.selectedFile = files[0];
  }
}
