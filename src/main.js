import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueEllipsis from 'vue-ellipsis'
import { store } from './assets/store';

Vue.use(VueEllipsis)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
