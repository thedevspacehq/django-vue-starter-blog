import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { apolloProvider } from "@/apollo-config";
import { store } from "@/vuex-config";

createApp(App).use(store).use(router).use(apolloProvider).mount("#app");
