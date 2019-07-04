import Vue from 'vue'
import App from './app'

//设置vue提示功能关闭
Vue.config.productionTip = false

//声明当前组件类型
App.mpTyep = 'app'//应用

//生成应用的实例
const app = new Vue(App)

//挂载整个应用
app.$mount()