import { useSuspenseQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { CustomerModel } from '@/models';
import { GetCustomerPurchaseAPIResponse } from '@/types';
import { apiClient } from '@/api';

const fetchCustomerPurchases = async (customerId: CustomerModel['id']) => {
  try {
    const response = await apiClient.get<GetCustomerPurchaseAPIResponse>(
      `customers/${customerId}/purchases`,
    );

    throw new Error('고객의 구매내역을 불러오지 못했어요.');

    return response.data;
  } catch {
    throw new Error('고객의 구매내역을 불러오지 못했어요.');
  }
};

interface UseGetCustomerPurchasesArgs {
  pathVariable: {
    customerId: CustomerModel['id'];
  };
}

const useGetCustomerPurchases = ({ pathVariable }: UseGetCustomerPurchasesArgs) => {
  const { customerId } = pathVariable;

  return useSuspenseQuery({
    queryFn: () => fetchCustomerPurchases(customerId),
    queryKey: QUERY_KEY.CUSTOMER_PURCHASES(customerId),
  });
};

export default useGetCustomerPurchases;
