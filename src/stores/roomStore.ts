import { atom } from 'recoil';
import { v1 } from 'uuid';

const initialState = {
  isOpen: false,
};

export type RoomState = typeof initialState;

export const roomStore = atom<RoomState>({
  key: `atom-key-room/${v1()}`,
  default: initialState,
});
