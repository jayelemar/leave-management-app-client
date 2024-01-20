import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface AuthStore {
  isLoggedIn: boolean,
  name: string,
  user: User,
  setLoginStatus: (isLoggedIn: boolean) => void,
  setName: (name: string) => void,
  SET_LOGOUT: () => void
}

const storedName = localStorage.getItem('name');
const name = storedName ? JSON.parse(storedName) : null;

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  name: name ? name : '',
  user: {
    name: '',
    email: '',
  },
  setLoginStatus: (isLoggedIn) => set({ isLoggedIn }),
  setName: (name) => set({ name }),
  SET_LOGOUT:() => set({
    isLoggedIn: false,
    name: '',
    user: {
      name: '',
      email: '',
    }
  }),
}));