import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryClient';

export default function useCallPay() {
  const callPayApi = async (phone: string) => {
    const { data } = await axios.post('https://mcafe-api.onrender.com/pay', { phone });
    return data;
  };
  return useMutation(queryKeys.order.pay(), callPayApi);
}
