import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index.js'
import echarts from 'echarts'
import axios from "axios";

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

