import { ProductModel } from '@/models';

export type GetPurchaseFrequencyParams = {
  from?: string;
  to?: string;
};

export type PurchaseFrequency = {
  range: string;
  count: number;
};

export type CustomerPurchase = {
  date: string;
  imgSrc: ProductModel['imgSrc'];
  price: ProductModel['price'];
  product: ProductModel['name'];
  quantity: number;
};

export type GetPurchaseFrequencyAPIResponse = PurchaseFrequency[];
export type GetCustomerPurchaseAPIResponse = CustomerPurchase[];
