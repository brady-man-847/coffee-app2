import { queryKeys } from '@/config/queryClient';
import { OrderRq } from '@/dto';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import _ from 'lodash';

export default function useCallOrder() {
  const callOrderApi = async ({ order, menuCode }: { order: OrderRq; menuCode: string }) => {
    const { data } = await axios.post('https://mcafe-api.onrender.com/order', {
      ...order,
      menuCode,
      optionValueList: _.compact(_.values(order.optionValueList)),
      setDefault: false,
    });
    return data;
  };
  return useMutation(queryKeys.order.add(), callOrderApi);
}
