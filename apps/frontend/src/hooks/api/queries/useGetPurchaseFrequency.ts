import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { GetPurchaseFrequencyParams, GetPurchaseFrequencyAPIResponse } from '@/types';
import { QUERY_KEY } from '@/constants';

const fetchPurchaseFrequency = async (params?: GetPurchaseFrequencyParams) => {
  try {
    const response = await axios.get<GetPurchaseFrequencyAPIResponse>(
      'http://localhost:4000/api/purchase-frequency',
      {
        params,
      },
    );

    return response.data;
  } catch {
    throw new Error('구매 목록을 불러오지 못했어요.');
  }
};

interface UseGetPurchaseFrequencyArgs {
  params?: GetPurchaseFrequencyParams;
}

const useGetPurchaseFrequency = (args: UseGetPurchaseFrequencyArgs) => {
  const { params } = args || {};

  return useQuery({
    queryFn: () => fetchPurchaseFrequency(params),
    queryKey: QUERY_KEY.PURCHASE_FREQUENCY(params),
  });
};

export default useGetPurchaseFrequency;
