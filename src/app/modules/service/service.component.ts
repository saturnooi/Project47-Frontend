import { Component } from '@angular/core';

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
}
