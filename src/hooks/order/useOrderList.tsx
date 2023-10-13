import { queryKeys } from '@/config/queryClient';
import { OrderRs } from '@/dto/orderDto';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useOrderList(phone: string, isReady: boolean) {
  return useQuery<OrderRs[]>(
    queryKeys.order.byPhone(phone),
    async () => {
      const { data } = await axios.get(`https://mcafe-api.onrender.com/order/${phone}`);
      return data;
    },
    {
      enabled: isReady,
      cacheTime: 0,
    },
  );
}
