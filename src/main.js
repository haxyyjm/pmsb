import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//集中管理css (针对公共的)
import '@/assets/css/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 开始引入echart
let echarts = require('echarts/lib/echarts')
// 引入折线图/柱状图等组件
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
require("echarts/lib/component/dataZoom")
require("echarts/lib/component/markPoint")
require("echarts/lib/component/markLine")
// vue全局注入echarts
Vue.prototype.$echarts = echarts

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
