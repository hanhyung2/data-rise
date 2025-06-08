import { CustomerModel } from '@/models';

export type SortBy = 'asc' | 'desc';

export type GetCustomersParams = {
  sortBy?: SortBy;
  name?: string;
};

export type Customer = CustomerModel & {
  count: number;
  totalAmount: number;
};

export type GetCustomersAPIResponse = Customer[];
