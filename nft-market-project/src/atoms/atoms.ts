import { atom } from "recoil";

// state role : madal open & close
// default : string
// component in use: GlobalHeader.tsx
export const isModalOpenState = atom({
  key: "isModalOpenState",
  default: "",
});
