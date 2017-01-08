import * as types from './mutations_type.js';
import Guid from 'guid';

export const state = {
    isLoading: false,
    token: '',
    PageTitleList: {
        default: "Demo Sample",
        '/Home': "首頁",
        '/C2F': "華氏 ⇌ 攝氏",
        '/Count': '計數器',
        '/Todo': 'Todo',
        '/Shop': '購物首頁',
        '/Cart': '結帳頁面',
        '/KomicaLive': '新番實況',
        '/Member': '會員專區',
        '/Login': '登入',
    },
    log: [{
            title: "2017/01/07",
            list: [
                '練習: 登入 + vue-router驗證'
            ]
        }, {
            title: "2017/01/06",
            list: [
                '練習：Fetch API Data（自製K島API） with Vuex',
                '練習：使用 vue-infinite-loading',
            ]
        },
        {
            title: "2017/01/03",
            list: [
                'ToDo List 用localStorage儲存狀態',
                '練習：購物車 with Vuex',
            ]
        },
        {
            title: "2017/01/02 Init",
            list: [
                '練習：華氏攝氏轉換',
                '練習：計數器 with Vuex',
                '練習：ToDo List with Vuex'
            ]
        }
    ]
}

export const actions = {
    toggleLoading({ commit }, isLoading) {
        commit(types.SET_LOADING, isLoading);
    },
    setPageTitle({ commit }, data) {
        commit(types.SET_PAGE_TITLE, data);
    },
    actionLogin({ commit }, { email, password }) {
        commit(types.SET_LOADING, true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'clipwww@gmail.com' && password == '123') {
                    commit(types.SET_LOADING, false);
                    commit(types.SET_TOKEN, Guid.create().value)
                    resolve();
                } else {
                    commit(types.SET_LOADING, false);
                    reject();
                }
            }, 1500);
        });
    }
}

export const mutations = {
    [types.SET_LOADING](state, isLoading) {
        state.isLoading = isLoading;
    },
    [types.SET_PAGE_TITLE](state, data) {
        state.PageTitleList[data.path] = data.title;
    },
    [types.SET_TOKEN](state, token) {
        state.token = token;
    }
}

export default {
    state,
    actions,
    mutations
}