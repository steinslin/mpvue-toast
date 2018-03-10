import Vue from 'vue'
import App from './App'
// import Toast from './toast.js'
// import Toast from './Toast.vue'

Vue.config.productionTip = false
App.mpType = 'app'

// Vue.component('toastt', Toast)

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: ['pages/logs/logs', '^pages/index/index'], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
