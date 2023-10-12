import { create } from "zustand";

interface State {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useLoginStore = create<State>()((set) => ({
  token: "",
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: "" }),
}));
