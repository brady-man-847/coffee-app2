import { createContext } from 'use-context-selector';
import { useReducer } from 'react';

export enum OrderView {
  TYPE_PHONE,
  CHOOSE_ORDER,
  PAYMENT,
}

const initialState = {
  view: OrderView.TYPE_PHONE,
  phone: '',
};

type State = typeof initialState;

type Action = { type: 'SET_PHONE'; phone: string } | { type: 'SET_VIEW'; view: OrderView };

type Dispatch = (action: Action) => void;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.phone,
      };
    case 'SET_VIEW':
      return {
        ...state,
        view: action.view,
      };
    default:
      throw new Error('unknown action type');
  }
};

export const useOrderValue = () => useReducer(reducer, initialState);

export const OrderContext = createContext<[State, Dispatch]>([initialState, () => null]);
