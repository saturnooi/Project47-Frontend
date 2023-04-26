import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SaveimgeService } from 'src/app/services/saveimge/saveimge.service';
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
  title = '';
  description = '';
  image = '';
  price = 0;
  unit = '';

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
    unit: '',
  };

  showModal = false;

  constructor(private http: HttpClient,private saveimgService:SaveimgeService ) {
    this.apiUrl = environment.apiUrl;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    console.log(this.image);

    this.selectedFile;
    this.saveimgService.uploadFile(this.selectedFile,'/')
    const service: Product = {
      image: this.image,
      title: this.title,
      description: this.description,
      price: this.price,
      unit: this.unit,
    };
    // this.http.post<Product>(`${this.apiUrl}/products`, this.product)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this.closeModal();
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     }
    //   });
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    this.selectedFile =file;
  
  }
}
