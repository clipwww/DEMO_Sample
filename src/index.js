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
import KomicaDetail from './components/pages/KomicaDetail.vue';
import Member from './components/pages/Member.vue';
import Login from './components/pages/Login.vue';


import store from './store'

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
        { path: '/Home', name: 'home', component: Home, meta: { requiresAuth: false }, },
        { path: '/C2F', name: 'c2f', component: C2F, meta: { requiresAuth: false }, },
        { path: '/Count', name: 'count', component: Count, meta: { requiresAuth: false }, },
        { path: '/Todo', name: 'todo', component: Todo, meta: { requiresAuth: false }, },
        { path: '/Shop', name: 'shop', component: Shop, meta: { requiresAuth: false }, },
        { path: '/Cart', name: 'cart', component: Cart, meta: { requiresAuth: false }, },
        { path: '/KomicaLive', name: 'Live', component: KomicaReader, meta: { requiresAuth: false }, },
        { path: '/KomicaLive/Detail/:id', name: 'detail', component: KomicaDetail, meta: { requiresAuth: false }, },
        { path: '/Member', name: 'member', component: Member, meta: { requiresAuth: true } },
        { path: '/Login', name: 'login', component: Login, meta: { requiresAuth: false }, },
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
});

router.beforeEach((to, from, next) => {
    // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
    console.log('to=', to.fullPath, '| from=', from.fullPath);
    if (to.matched.some(record => {
            console.log(record.name, record.meta.requiresAuth);
            return record.meta.requiresAuth;
        })) {
        // 如果沒有 token 
        console.log('token?', store.state.token);
        if (store.state.token === '') {
            // 轉跳到 login page
            next({ path: '/login' });
        } else {
            next(); // 往下繼續執行
        }
    } else {
        next(); // 往下繼續執行
    }
})

var app = new Vue({
    el: '#app',
    router: router,
    store: store,
    methods: {

    },
    render: h => h(App)
});