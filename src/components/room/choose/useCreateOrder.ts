import { useRecoilState } from 'recoil';
import { menuInitialState, menuStore } from '@/stores/menuStore';
import { roomInitialState, roomStore } from '@/stores/roomStore';
import useMutationCreateOrder from '@/hooks/order/useMutationCreateOrder';
import _ from 'lodash';

export default function useCreateOrder() {
  const [{ order, menu }, menuDispatch] = useRecoilState(menuStore);
  const [, roomDispatch] = useRecoilState(roomStore);

  const { mutate: createOrder } = useMutationCreateOrder({});

  const handleClick = (roomSn: number) => {
    const CONFIRM_MESSAGE = `해당 방에 주문하시겠습니까?\n주문을 확인해주세요!\n---\n${menu.name}\n${_.keys(order.optionList).join(
      '\n',
    )}\n---`;
    if (window.confirm(CONFIRM_MESSAGE)) {
      createOrder(
        {
          roomSn,
          menuCode: menu.code,
          optionList: _.values(order.optionList),
        },
        {
          onSuccess: async () => {
            setTimeout(() => {
              roomDispatch(roomInitialState);
              menuDispatch(menuInitialState);
            }, 1000);

            window.alert('주문이 완료되었습니다.');
          },
          onError: () => {
            window.alert('주문이 실패하였습니다.');
          },
        },
      );
    }
  };

  return {
    handleClick,
  };
}
