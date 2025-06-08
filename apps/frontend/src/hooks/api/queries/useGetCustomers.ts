import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { GetCustomersParams } from '@/types'
import { QUERY_KEY } from '@/constants'

const fetchCustomers = async (params?: GetCustomersParams) => {
    try {
        const response = await axios.get('/api/customers', { params });

        return response.data;
    } catch {
        throw new Error('고객 목록을 불러오지 못했어요.');
    }
}

interface UseGetCustomersArgs {
    params?: GetCustomersParams;
}


const useGetCustomers = (args: UseGetCustomersArgs) => {
    const { params } = args || {};

    return useQuery({
        queryFn: () => fetchCustomers(params),
        queryKey: QUERY_KEY.CUSTOMERS(params),
    })
}

export default useGetCustomers;
