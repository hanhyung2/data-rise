import { CustomerModel } from '@/models';

export type GetCustomersParams = {
  sortBy?: 'asc' | 'desc';
  name?: string;
};

export type Customer = CustomerModel & {
  count: number;
  totalAmount: number;
};

export type GetCustomersAPIResponse = Customer[];
