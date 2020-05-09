import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'




Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
