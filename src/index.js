import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Vuex);

import App from './components/App.vue';
import Home from './components/pages/Home.vue';
import C2F from './components/pages/CtoF.vue';
import Count from './components/pages/Count.vue';
import Todo from './components/pages/Todo.vue';
import Shop from './components/pages/Shop.vue';
import Cart from './components/pages/Cart.vue';
import KomicaReader from './components/pages/KomicaReader.vue';
import KomicaDetail from './components/pages/nested-pages/KomicaDetail.vue';


import store from './store'

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
        { path: '/Home', name: 'home', component: Home },
        { path: '/C2F', name: 'c2f', component: C2F },
        { path: '/Count', name: 'count', component: Count },
        { path: '/Todo', name: 'todo', component: Todo },
        { path: '/Shop', name: 'shop', component: Shop },
        { path: '/Cart', name: 'cart', component: Cart },
        {
            path: '/KomicaLive',
            name: 'KomicaLive',
            component: KomicaReader,
            children: [
                { path: 'Detail/:id', name: 'detail', component: KomicaDetail },
            ]
        },
        // router 轉址
        { path: '/*', redirect: '/Home' }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    //     // mode: 'history'才能用
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }
})

var app = new Vue({
    el: '#app',
    router: router,
    store: store,
    methods: {

    },
    render: h => h(App)
});