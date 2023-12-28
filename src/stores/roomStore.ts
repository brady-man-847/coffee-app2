import { atom } from 'recoil';
import { v1 } from 'uuid';

export type ModalType = 'none' | 'create' | 'search' | 'entered';

const initialState = {
  isOpen: false,
  modalType: 'none' as ModalType,
};

export const roomInitialState = initialState;
export type RoomState = typeof initialState;

export const roomStore = atom<RoomState>({
  key: `atom-key-room/${v1()}`,
  default: initialState,
});
