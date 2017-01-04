import * as types from './mutations_type.js';

export const state = {
    isLoading: false
}

export const actions = {
    toggleLoading({ commit }, isLoading) {
        commit(types.SET_LOADING, isLoading);
    }
}

export const mutations = {
    [types.SET_LOADING](state, isLoading) {
        state.isLoading = isLoading;
    }
}

export default {
    state,
    actions,
    mutations
}