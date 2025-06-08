import { ProductModel, PurchaseFrequencyModel } from '@/models';

export type GetPurchaseFrequencyParams = {
  from?: string;
  to?: string;
};

export type GetPurchaseFrequencyAPIResponse = PurchaseFrequencyModel[];
export type GetCustomerPurchaseAPIResponse = ProductModel[];
