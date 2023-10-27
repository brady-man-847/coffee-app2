import { queryKeys } from '@/config/queryClient';
import { OrderRq } from '@/dto';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
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

  return useMutation(queryKeys.order.add(), callOrderApi, {
    onSuccess: (rtnData) => window.alert(rtnData),
    onError(error, { order, menuCode }, context) {
      const e = error as AxiosError;
      if (e?.response?.status === 409) {
        if (window.confirm('이미 주문이 있습니다.\n지금 주문으로 변경할까요?')) {
          axios.delete(`https://mcafe-api.onrender.com/order/${order.phone}`).then(() => {
            callOrderApi({ order, menuCode }).then((rtnData) => window.alert(rtnData));
          });
        }
      } else {
        window.alert('주문에 실패하였습니다. 다시 시도해주세요.');
      }
    },
  });
}
