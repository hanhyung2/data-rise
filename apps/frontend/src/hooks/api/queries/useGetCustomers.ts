import { useSuspenseQuery } from '@tanstack/react-query';

import { GetCustomersParams, GetCustomersAPIResponse } from '@/types';
import { QUERY_KEY } from '@/constants';
import { apiClient } from '@/api';

const fetchCustomers = async (params?: GetCustomersParams) => {
  try {
    const response = await apiClient.get<GetCustomersAPIResponse>('customers', { params });

    return response.data;
  } catch {
    throw new Error('고객 목록을 불러오지 못했어요.');
  }
};

interface UseGetCustomersArgs {
  params?: GetCustomersParams;
}

const useGetCustomers = (args: UseGetCustomersArgs) => {
  const { params } = args || {};

  return useSuspenseQuery({
    queryFn: () => fetchCustomers(params),
    queryKey: QUERY_KEY.CUSTOMERS(params),
  });
};

export default useGetCustomers;
