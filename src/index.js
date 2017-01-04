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
import KomicaNews from './components/pages/nested-pages/KomicaNews.vue';
import KomicaLive from './components/pages/nested-pages/KomicaLive.vue';
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
            path: '/KomicaReader',
            name: 'K島',
            component: KomicaReader,
            children: [
                { path: 'Live', name: '新番實況', component: KomicaLive },
                { path: 'News', name: '新番捏他', component: KomicaNews },
                { path: 'Detail/:id', name: 'Detail', component: KomicaDetail },
            ]
        },
        // router 轉址
        { path: '/*', redirect: '/Home' }
    ]
})

var app = new Vue({
    el: '#app',
    router: router,
    store: store,
    methods: {

    },
    render: h => h(App)
});