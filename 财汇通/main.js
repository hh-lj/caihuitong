import Vue from 'vue'
import App from './App'
import myRequest from './utils/api.js'
// 全局接口
Vue.prototype.$url='http://www.cdcaihuitong.com'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
