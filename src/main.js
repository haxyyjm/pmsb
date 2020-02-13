import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//集中管理css (针对公共的)
import '@/assets/css/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {
  size: 'small'
})

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
