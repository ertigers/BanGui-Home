import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/style/reset.scss'
import waterfall from 'vue-waterfall2'
import 'github-markdown-css'

Vue.config.productionTip = false

Vue.use(waterfall)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
