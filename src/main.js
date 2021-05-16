import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res=>{
//   console.log(res)
// })
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/multidata'
// })]).then(result=>{
//   console.log(result)
// })

// const instance=axios.create({
//   baseURL:'http://123.207.32.32:8000'
// })

// instance({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })

import {request} from './network/request'

request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
