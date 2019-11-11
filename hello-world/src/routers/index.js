import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home'
import Recover from '../pages/Recover.vue'
import Mine from '../pages/Mine'
import Shopcar from '../pages/Shopcar'
import Detail from '../pages/detail'
import Main from '../pages/Main'
import Logon from '../pages/logon'
import Viewmore from '../pages/viewmore'
import Order from '../pages/Order'
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/main',
            name: 'main',
            component: Main,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'recover',
                    name: 'recover',
                    component: Recover
                },

                {
                    path: 'shopcar',
                    name: 'shopcar',
                    component: Shopcar
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: Mine
                },
            ]
        },

        {
            path: '/detail',
            name: 'detail',
            component: Detail
        },
        {
            path: '/logon',
            name: 'logon',
            component: Logon
        },
        {
            path: '/viewmore',
            name: 'viewmore',
            component: Viewmore
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        },
        {
            path: '/',
            redirect: '/main/home'
        }
    ]
})