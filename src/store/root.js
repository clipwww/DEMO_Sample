import * as types from './mutations_type.js';

export const state = {
    isLoading: false,
    PageTitleList: {
        default: "Demo Sample",
        '/Home': "首頁",
        '/C2F': "華氏 ⇌ 攝氏",
        '/Count': '計數器',
        '/Todo': 'Todo',
        '/Shop': '購物首頁',
        '/Cart': '結帳頁面',
        '/KomicaLive': '新番實況',
    }
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