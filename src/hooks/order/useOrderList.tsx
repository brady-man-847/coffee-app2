import { queryKeys } from '@/config/queryClient';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { OrderDto } from '@/apis';

export default function useOrderList(phone: string, isReady: boolean) {
  return useQuery<OrderDto[]>(
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
