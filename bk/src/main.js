// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import  vuex  from 'vuex'
import store from './store'
import E from './utils/E'
import Cookies from 'js-cookie'

import XLSX from 'xlsx/dist/xlsx.full.min' //导出表格数据

import 'element-ui/lib/theme-chalk/index.css'
import  '../src/styles/style.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vuex)
Vue.use(Cookies)
Vue.prototype.$E = E; //在vu原型上(全局)启用事件侦听器工具
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  XLSX,
  components: { App },
  template: '<App/>'
})

