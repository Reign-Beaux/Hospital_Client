import { create } from "zustand";

interface State {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const getSession = () => {
  let sessionString = localStorage.getItem("token");
  if (!sessionString) return "";

  return sessionString;
}

export const useSessionStore = create<State>()((set) => ({
  token: getSession(),
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: "" }),
}));
