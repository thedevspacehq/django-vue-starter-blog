import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("user") || null,
  }),
  getters: {
    getToken: (state) => state.token,
    getUser: (state) => JSON.parse(state.user),
  },
  actions: {
    setToken(token) {
      this.token = token;

      // Save token to local storage
      localStorage.setItem("token", this.token);
    },
    removeToken() {
      this.token = null;

      // Delete token from local storage
      localStorage.removeItem("token");
    },
    setUser(user) {
      this.user = JSON.stringify(user);

      // Save user to local storage
      localStorage.setItem("user", this.user);
    },
    removeUser() {
      this.user = null;

      // Delete user from local storage
      localStorage.removeItem("user");
    },
  },
});