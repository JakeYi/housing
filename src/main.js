import Vue from 'vue'
import App from './App'
import './css/common.css'
import './css/iconfont.css'
import store from './utils/store'
import { openWin, redirectTo, backBeaforWin, Ajax } from './utils/common'

Vue.config.productionTip = false
App.mpType = 'app'
// 把通用方法挂载到Vue原型上
Vue.prototype.$openWin = openWin
Vue.prototype.$redirectTo = redirectTo
Vue.prototype.$backBeaforWin = backBeaforWin
Vue.prototype.$ajax = Ajax

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
