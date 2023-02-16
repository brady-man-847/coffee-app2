import { atom } from 'recoil';
import { OrderRs } from '@/dto/orderDto';

export const orderAtom = atom<OrderRs>({
  key: 'order',
  default: {
    menuCode: '',
    optionValueList: [],
    phone: '',
    setDefault: false,
  } as OrderRs,
});
