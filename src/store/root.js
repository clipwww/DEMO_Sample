import * as types from './mutations_type.js';
import Guid from 'guid';
// 為了設定語系引入 Vue
import Vue from 'vue';

export const state = {
    lang: "en",
    isLoading: false,
    token: '',
    PageTitleList: {
        default: "Demo Sample",
        '/Home': "Home",
        '/Setting': 'Setting',
        '/C2F': "C2F",
        '/Counter': 'Counter',
        '/Todo': 'ToDo',
        '/Shop': 'Shop',
        '/Cart': 'Cart',
        '/KomicaLive': 'Komica_Live',
        '/Member': 'Member',
        '/Login': 'Login',
    },
    log: [{
            title: "2017/01/09",
            list: [
                '練習: i18n多語系'
            ]
        }, {
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
    setLanguage({ commit }, lang) {
        commit(types.SET_LANGUAGE, lang);
    },
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
    [types.SET_LANGUAGE](state, lang) {
        state.lang = lang;
        // 設定 Vue config 將會改變 i18n 使用的語言包而更改語系！
        Vue.config.lang = state.lang;
    },
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