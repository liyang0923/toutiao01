import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store'


import Vant from 'vant'

import 'vant/lib/index.css'



import './styles/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  Router,
  Store,
  render: h => h(App)
}).$mount('#app')
