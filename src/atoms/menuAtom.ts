import { atom } from 'recoil';
import { MenuRs } from '@/dto/menuDto';

export const menuAtom = atom<MenuRs>({
  key: 'menu',
  default: {} as MenuRs,
});
