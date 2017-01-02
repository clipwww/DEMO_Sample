import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Vuex);

import App from './App.vue';
import Home from './pages/Home.vue';
import C2F from './pages/CtoF.vue';
import Count from './pages/Count.vue';
import Todo from './pages/Todo.vue';

import store from './store'

const router = new VueRouter({
    routes: [
        { path: '/Home', name: 'Home', component: Home },
        { path: '/C2F', name: '華氏<->攝氏', component: C2F },
        { path: '/Count', name: '計數器 with Vuex', component: Count },
        { path: '/Todo', name: 'Todo List', component: Todo },
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