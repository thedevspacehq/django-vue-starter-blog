import { createStore } from "vuex";
import { USER_SIGNIN, USER_SIGNUP } from "./mutations";
import { apolloClient } from "@/apollo-config";

export const store = createStore({
    state() {
      return {
        token: null || localStorage.getItem("token"),
        user: {},
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
        state.token = "" && localStorage.removeItem("token");
      },
    },
    actions: {
      async signUp({ commit, dispatch }, authDetails) {
        try {
          const { data } = await apolloClient.mutate({
            mutation: USER_SIGNUP,
            variables: { ...authDetails },
          });
          const token = JSON.stringify(data.createUser.token);
          commit("SET_TOKEN", token);
          dispatch("signIn", authDetails);
        } catch (e) {
          console.log(JSON.stringify(e, null, 2));
        }
      },
      async signIn({ commit }, authDetails) {
        try {
          //console.log(authDetails)
          const { data } = await apolloClient.mutate({
            mutation: USER_SIGNIN,
            variables: { ...authDetails },
          });
          //console.log(data)
          const token = JSON.stringify(data.tokenAuth.token);
          //console.log(token)
          commit("SET_TOKEN", token);
          commit("USER_SIGNIN", authDetails);
          localStorage.setItem("token", token);
        } catch (e) {
          console.log(JSON.stringify(e, null, 2));
        }
      },
      async signOut(commit) {
        commit("USER_SIGNOUT");
      },
    },
  });