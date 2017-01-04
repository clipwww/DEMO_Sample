import * as types from '../mutations_type.js';

const state = {
    List: []
}

const getters = {
    getNewsList: state => state.List,
}

const actions = {
    fetchLkComics({ commit }, isInit, page) {

        let url = "http://komicaapi.apphb.com/api/News";

        fetch(url, {
                // method: 'POST',
                // mode: 'no-cors',
                // headers: new Headers({
                //     'Content-Type': 'text/html'
                // })
            })
            .then(res => {
                console.log(res);
                if (res.ok) {
                    return res.text();
                } else {
                    alert(res);
                }
            })
            .then(data => {
                commit(types.FETCH_KOMICA, data);
            })
            .catch(err => {
                alert(err);
            });

    }
}

const mutations = {
    [types.FETCH_KOMICA](state, data) {

    }
}

export default {
    state,
    getters,
    actions,
    mutations
}