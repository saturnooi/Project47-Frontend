export interface IAccessories {
  name: string;
  company?: string;
  category: string;
  pricePerUnit?: number;
  unit: string;
  balance: number;
}

export interface IAccessoryDetail {
  category: string;
  total: number;
  balance: number;
  date: string | Date;
  expired?: string | Date;
  detail?: string;
}
