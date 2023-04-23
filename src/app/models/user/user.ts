export enum Role {
  Admin = 'admin',
  SuperAdmin = 'superadmin',
}

export interface Employee {
  first_name: string;
  last_name: string;
  card_id: string;
  sex: string;
  position: string;
  address: string;
  birthday: Date;
  email: string;
  prefix: string;
  phone_number: string;
  nationality: string;
  ethnicity: string;
}

export interface Admin {
  username: string;
  password: string;
  employee: Employee;
  role: Role;
}
