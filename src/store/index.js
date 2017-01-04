import Vue from 'vue'
import Vuex from 'vuex'

// root
import * as getters from './getters.js';
import { state, actions, mutations } from './root.js';

//modules
import count from './modules/count.js';
import todo from './modules/todo.js';
import shop from './modules/shop.js';
import komica from './modules/komica.js';

Vue.use(Vuex);


export default new Vuex.Store({
    // root
    state,
    actions,
    mutations,
    getters,
    modules: {
        count: count,
        todo: todo,
        shop: shop,
        komica: komica
    },
    // 嚴格模式，禁止直接修改 state
    strict: true
});