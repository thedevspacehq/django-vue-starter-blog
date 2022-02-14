import { createStore } from "vuex";
import { USER_SIGNIN, USER_SIGNUP } from "./mutations";
import { apolloClient } from "@/apollo-config";

export const store = createStore({
    state() {
      return {
        token: null || localStorage.getItem("token"),
        user: {} || localStorage.getItem("user"),
        authStatus: false,
      };
    },
    getters: {
      isAuthenticated: (state) => !!state.token,
      authStatus: (state) => state.authStatus,
      user: (state) => state.user,
    },
    mutations: {
      SET_TOKEN(state, token) {
        state.token = token;
      },
      USER_SIGNIN(state, user) {
        state.authStatus = true;
        state.user = { ...user };
      },
      USER_SIGNOUT(state) {
        state.authStatus = "";
        state.token = "";
      },
    },
    actions: {
      // Sign up action
      async signUp({ commit, dispatch }, authDetails) {
        try {
          const { data } = await apolloClient.mutate({
            mutation: USER_SIGNUP,
            variables: { ...authDetails },
          });

          // Retrieve and save the token
          const token = JSON.stringify(data.createUser.token);
          commit("SET_TOKEN", token);

          // Use the information to sign the user in
          dispatch("signIn", authDetails);

        } catch (e) {
          console.log(JSON.stringify(e, null, 2));
        }
      },
      async signIn({ commit }, authDetails) {
        try {
          const { data } = await apolloClient.mutate({
            mutation: USER_SIGNIN,
            variables: { ...authDetails },
          });
          // Retrieving the token and user info
          const token = JSON.stringify(data.tokenAuth.token);
          const user = JSON.stringify(data.tokenAuth.user);

          commit("SET_TOKEN", token);
          commit("USER_SIGNIN", user);

          // Store token and user info to localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
        } catch (e) {
          console.log(JSON.stringify(e, null, 2));
        }
      },

      // Sign out the current user and remove the saved token and user info
      async signOut({commit}) {
        commit("USER_SIGNOUT");
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      },
    },
  });