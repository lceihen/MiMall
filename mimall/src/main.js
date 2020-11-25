import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// const mock=true;
// if(mock)
// {
//   require('../public/mock/api');
// }
//Vue.use(axios)
Vue.prototype.$axios = axios;
 Vue.prototype.$ajax = axios
//import env from './env.js';
//jsonp,代理根据前端的跨域方式做调整
axios.defaults.baseURL='/api';
 axios.defaults.timeout=18000;
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL=env.baseURL
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status ==10){
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
