import Vue from 'vue'
import store from './store/store'
import App from './app'
//设置vue提示功能关闭
Vue.config.productionTip = false

//声明当前组件类型
App.mpTyep = 'app'//应用

//降store对象放在vue的原型上，为了让每个实例都可以使用
Vue.productionTip.$store = store

//生成应用的实例
const app = new Vue(App)

//挂载整个应用
app.$mount()