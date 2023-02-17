import { atom } from 'recoil';
import { OrderRq } from '@/dto/orderDto';

export const orderAtom = atom<OrderRq>({
  key: 'order',
  default: {
    menuCode: '',
    optionValueList: [],
    phone: '',
    setDefault: false,
  } as OrderRq,
});
