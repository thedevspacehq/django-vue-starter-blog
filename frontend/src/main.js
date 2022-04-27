import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { apolloProvider } from "@/apollo-config";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).use(apolloProvider).mount("#app");
