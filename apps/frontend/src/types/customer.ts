import { CustomerModel } from '@/models';

export type GetCustomersParams = {
  sortBy?: 'asc' | 'desc';
  name?: string;
};

export type GetCustomersAPIResponse = CustomerModel[];
