import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryClient';
import axios from 'axios';
import { OrderRs } from '@/dto/orderDto';

export default function useOrderList(phone: string, isReady: boolean) {
  return useQuery<OrderRs[]>(
    queryKeys.order.byPhone(phone),
    async () => {
      const { data } = await axios.get(`https://mcafe-api.onrender.com/order/${phone}`);
      return data;
    },
    {
      enabled: isReady,
    },
  );
}
