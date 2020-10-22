import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueEllipsis from 'vue-ellipsis'
Vue.use(VueEllipsis)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
