import axios from 'axios';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants'
import { CustomerModel } from '@/models'

const fetchCustomerPurchases = async (customerId: CustomerModel['id']) => {
    try {
        const response = await axios.get(`/api/customers/${customerId}/purchases`);

        return response.data;
    } catch {
        throw new Error('고객의 구매내역을 불러오지 못했어요.');
    }
}

interface UseGetCustomerPurchasesArgs {
    customerId: CustomerModel['id'];
}


const useGetCustomerPurchases = ({ customerId }: UseGetCustomerPurchasesArgs) => {
    return useQuery({
        queryFn: () => fetchCustomerPurchases(customerId),
        queryKey: QUERY_KEY.CUSTOMER_PURCHASES(customerId),
    })
}

export default useGetCustomerPurchases;
