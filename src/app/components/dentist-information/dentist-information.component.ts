import { Component, Input } from '@angular/core';

interface Dentist {
  id: number;
  username: string;
  password: string;
  img: string;
  email: string;
  card_id: string;
  prefix: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  nationality: string;
  ethnicity: string;
  birthday: string;
  address: string;
  sex: string;
}

@Component({
  selector: 'app-dentist-information',
  templateUrl: './dentist-information.component.html',
  styleUrls: ['./dentist-information.component.css'],
})
export class DentistInformationComponent {
  dentists: Dentist[] = [
    {
      id: 1,
      username: 'john_dentist',
      password: 'password123',
      img: 'https://example.com/dentist.jpg',
      email: 'john.dentist@example.com',
      card_id: '123456789',
      prefix: 'Dr.',
      first_name: 'John',
      last_name: 'Dentist',
      phone_number: '+1-555-1234',
      nationality: 'American',
      ethnicity: 'White',
      birthday: '1980-01-01',
      address: '123 Main St, Anytown USA',
      sex: 'Male',
    },
    {
      id: 2,
      username: 'jane_dentist',
      password: 'password456',
      img: 'https://example.com/dentist.jpg',
      email: 'jane.dentist@example.com',
      card_id: '987654321',
      prefix: 'Dr.',
      first_name: 'Jane',
      last_name: 'Dentist',
      phone_number: '+1-555-5678',
      nationality: 'American',
      ethnicity: 'White',
      birthday: '1985-03-15',
      address: '456 Main St, Anytown USA',
      sex: 'Female',
    },
    {
      id: 3,
      username: 'bob_dentist',
      password: 'password789',
      img: 'https://example.com/dentist.jpg',
      email: 'bob.dentist@example.com',
      card_id: '2468101214',
      prefix: 'Dr.',
      first_name: 'Bob',
      last_name: 'Dentist',
      phone_number: '+1-555-2468',
      nationality: 'American',
      ethnicity: 'White',
      birthday: '1975-11-20',
      address: '789 Main St, Anytown USA',
      sex: 'Male',
    },
    {
      id: 4,
      username: 'emily_dentist',
      password: 'password101',
      img: 'https://example.com/dentist.jpg',
      email: 'emily.dentist@example.com',
      card_id: '369121518',
      prefix: 'Dr.',
      first_name: 'Emily',
      last_name: 'Dentist',
      phone_number: '+1-555-3691',
      nationality: 'American',
      ethnicity: 'Asian',
      birthday: '1990-07-03',
      address: '321 Main St, Anytown USA',
      sex: 'Female',
    },
  ];
}
