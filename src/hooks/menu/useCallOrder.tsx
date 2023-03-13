import { useMutation } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryClient';
import axios from 'axios';
import _ from 'lodash';
import { OrderRq } from '@/dto';

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
