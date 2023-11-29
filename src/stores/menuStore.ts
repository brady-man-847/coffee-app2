import { atom } from 'recoil';
import { v1 } from 'uuid';
import { MenuDto } from '@/apis';
import { CustomOrderDto } from '@/dto/CustomOrderDto';

const initialState = {
  isDrawerOpen: false,
  menu: {} as MenuDto,
  order: {} as CustomOrderDto,
};
export type MenuState = typeof initialState;

export const menuStore = atom<MenuState>({
  key: `atom-key-menu/${v1()}`,
  default: initialState,
});
