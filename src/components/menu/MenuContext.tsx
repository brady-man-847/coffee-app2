import { useReducer } from 'react';
import { createContext } from 'use-context-selector';
import { MenuDto } from '@/apis';
import { CustomOrderDto } from '@/dto/CustomOrderDto';

const initialState = {
  isDrawerOpen: false,
  menu: {} as MenuDto,
  order: {} as CustomOrderDto,
};

type State = typeof initialState;

type Action =
  | { type: 'SET_DRAWER_OPEN'; isDrawerOpen: boolean }
  | { type: 'SET_MENU'; menu: MenuDto }
  | { type: 'SET_ORDER'; order: CustomOrderDto }
  | { type: 'INIT_MENU' };

type Dispatch = (action: Action) => void;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_DRAWER_OPEN':
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen,
      };
    case 'SET_MENU':
      return {
        ...state,
        menu: action.menu,
      };
    case 'SET_ORDER':
      return {
        ...state,
        order: action.order,
      };
    case 'INIT_MENU':
      return {
        ...initialState,
      };
    default:
      throw new Error('unknown action type');
  }
};

export const useMenuValue = () => useReducer(reducer, initialState);

export const MenuContext = createContext<[State, Dispatch]>([initialState, () => null]);
