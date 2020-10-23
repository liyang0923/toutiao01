import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store'


import Vant from 'vant'

import 'vant/lib/index.css'

// 设置html 字体大小 
import 'amfe-flexible'


import './styles/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Router,
  Store,
  render: h => h(App)
})