import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'
import store from './store'
import './config/rem'
import '@/assets/css/public.css';
import api from './api' // 导入api接口


Vue.prototype.$api = api; // 将api挂载原型
//Vue.prototype.$axios = axios

import BaseHeader from "@/components/BaseHeader.vue"
Vue.component('base-header', BaseHeader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
