import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import './index.css'
import "@/assets/styles/main.css";
import "@/assets/styles/main.css";
import "@/assets/styles/main.css";

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
