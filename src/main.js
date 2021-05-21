import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js'
import store from './store/store.js'
import * as echarts from 'echarts'
import axios from "axios";
import timeTools from "@/methods/timeTool";

Vue.prototype.$timeTools = timeTools
Vue.prototype.$axios = axios
//axios.defaults.baseURL = '/api'
axios.defaults.baseURL = 'http://47.116.67.220:90/domain'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

