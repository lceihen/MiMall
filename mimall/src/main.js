import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload';
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
// const mock=true;
// if(mock)
// {
//   require('../public/mock/api');
// }
//Vue.use(axios)
Vue.prototype.$message = Message;
Vue.prototype.$axios = axios;
Vue.prototype.$ajax = axios
    //import env from './env.js';
    //jsonp,代理根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 18000;
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL=env.baseURL
//接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login';
            return Promise.reject(res);
        }

    } else {
        //  alert(res.msg);
        Message.warning(res.msg)
        return Promise.reject(res);
    }
});
Vue.config.productionTip = false
Vue.use(VueLazyLoad);
Vue.use(VueCookie);
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')