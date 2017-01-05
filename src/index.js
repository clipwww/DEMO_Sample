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
    routes: [
        { path: '/Home', name: 'Home', component: Home },
        { path: '/C2F', name: '華氏 ⇌ 攝氏', component: C2F },
        { path: '/Count', name: '計數器', component: Count },
        { path: '/Todo', name: 'Todo List', component: Todo },
        { path: '/Shop', name: '購物首頁', component: Shop },
        { path: '/Cart', name: '結帳頁面', component: Cart },
        {
            path: '/KomicaLive',
            name: '新番實況',
            component: KomicaReader,
            children: [
                { path: 'Detail/:id', name: 'Detail', component: KomicaDetail },
            ]
        },
        // router 轉址
        { path: '/*', redirect: '/Home' }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
            // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
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