import { useMutation } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryClient';
import axios from 'axios';

export default function useCallOrderCancel() {
  return useMutation(queryKeys.order.cancel(), async (phone: string) => {
    const { data } = await axios.delete(`https://mcafe-api.onrender.com/order/${phone}`);
    return data;
  });
}
