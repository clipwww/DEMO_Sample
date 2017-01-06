import * as types from './mutations_type.js';

export const state = {
    isLoading: true,
    PageTitleList: {
        default: "Demo Sample",
        '/Home': "首頁",
        '/C2F': "華氏 ⇌ 攝氏",
        '/Count': '計數器',
        '/Todo': 'Todo',
        '/Shop': '購物首頁',
        '/Cart': '結帳頁面',
        '/KomicaLive': '新番實況',
    },
    log: [{
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
    }
}

export const mutations = {
    [types.SET_LOADING](state, isLoading) {
        state.isLoading = isLoading;
    },
    [types.SET_PAGE_TITLE](state, data) {
        state.PageTitleList[data.path] = data.title;
    }
}

export default {
    state,
    actions,
    mutations
}