import { CustomerModel } from '@/models';
import { GetPurchaseFrequencyParams, GetCustomersParams } from '@/types';

export const QUERY_KEY = {
  PURCHASE_FREQUENCY: (params?: GetPurchaseFrequencyParams) => [
    'purchases',
    'frequency',
    { ...params },
  ],
  CUSTOMERS: (params?: GetCustomersParams) => ['customers', { ...params }],
  CUSTOMER_PURCHASES: (customerId: CustomerModel['id']) => ['customer', customerId, 'purchases'],
};
