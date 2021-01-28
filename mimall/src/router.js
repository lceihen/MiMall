import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
//import Login from './pages/login'
import Index from './pages/index';
//import Product from './pages/product';
//import Detail from './pages/detail';
//import Cart from './pages/cart';
//import Order from './pages/order';
//import OrderConfirm from './pages/orderConfirm';
//import OrderList from './pages/orderList';
//import OrderPay from './pages/orderPay';
//import AliPay from './pages/alipay';
Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [{
                    path: 'index',
                    name: 'index',
                    component: Index
                },
                {
                    path: 'product/:id',
                    name: 'product',
                    //    component: Product,
                    //  component: resolve => require(['./pages/product.vue', resolve])
                    component: () =>
                        import ('./pages/product.vue')
                },
                {
                    path: 'detail/:id',
                    name: 'detail',
                    //  component: Detail
                    // component: resolve => require(['./pages/detail.vue', resolve])
                    component: () =>
                        import ('./pages/detail.vue')
                },
            ]
        },
        {

            path: '/cart',
            name: 'cart',
            //  component: Cart,
            //   component: resolve => require(['./pages/cart.vue'], resolve)
            component: () =>
                import ('./pages/cart.vue')
        },
        {
            path: '/login',
            name: 'login',
            //component: Login
            // component: resolve => require(['./pages/login.vue'], resolve)
            component: () =>
                import ('./pages/login.vue')
        },
        {
            path: '/order',
            name: 'order',
            //component: Order,
            component: () =>
                import ('./pages/order.vue'),
            children: [{
                    path: 'list',
                    name: 'order-list',
                    //component: OrderList,
                    //       component: resolve => require(['./pages/orderList.vue'], resolve)
                    component: () =>
                        import ('./pages/orderList.vue')
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    // component: OrderConfirm,
                    // component: resolve => require(['./pages/orderConfirm.vue'], resolve)
                    component: () =>
                        import ('./pages/orderConfirm.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    // component: OrderPay,
                    //  component: resolve => require(['./pages/orderPay.vue'], resolve)
                    component: () =>
                        import ('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    //  component: AliPay,
                    component: () =>
                        import ('./pages/login.vue')
                }
            ]
        }
    ]
});