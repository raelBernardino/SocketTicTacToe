import { atom } from 'recoil'

export const gameboardAtom = atom({
  key: "gameboard",
  default: ["", "", "", "", "", "", "", "", ""]
});

export const currentPlayerAtom = atom({
  key: "player",
  default: "x",
});

export const winnerFoundAtom = atom({
  key: "winnerFound",
  default: false,
});