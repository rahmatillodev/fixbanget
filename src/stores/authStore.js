// src/stores/authStore.js
import { create } from 'zustand';
import { initialUsers } from '../lib/mockData';



export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
  isLoading: false,
  error: null,
  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const fakeToken = "mock_token_" + userData.email;
      const user = {
        ...userData,
        accessToken: fakeToken
      };
      localStorage.setItem("user", JSON.stringify(user));
      set({ user, isLoading: false });
    } catch (err) {
      set({ error: "Ошибка при регистрации", isLoading: false });
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    await new Promise((res) => setTimeout(res, 500));
    const foundUser = initialUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      set({ user: foundUser, isAuthenticated: true, isLoading: false });
    } else {
      set({ error: 'Неверная почта или пароль', isLoading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  }
}));
