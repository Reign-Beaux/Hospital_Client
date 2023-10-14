import { create } from "zustand";

interface State {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const getSession = () => {
  let sessionString = localStorage.getItem("session");
  if (!sessionString) return "";

  return sessionString;
}

export const useSessionStore = create<State>()((set) => ({
  token: getSession(),
  setToken: (token: string) => {
    localStorage.setItem("session", token);
    set({ token })
  },
  clearToken: () => {
    localStorage.removeItem("session");
    set({ token: "" })
  },
}));
