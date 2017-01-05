import * as types from '../mutations_type.js';

const state = {
    Posts: [],
    DetailPost: {},
}

const getters = {
    getPosts: state => state.Posts,
    getDetailPost: state => state.DetailPost,
}

const actions = {
    fetchKomica({ commit }, obj) {
        commit(types.SET_LOADING, true);
        let page = obj.page ? obj.page : 1;
        let resNo = obj.res ? obj.res : "";
        let url = "https://komicaapi.apphb.com/api/" + obj.where + "?page=" + page + "&res=" + resNo;

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
                    return res.json();
                } else {
                    alert(res);
                }
            })
            .then(data => {
                commit(types.FETCH_KOMICA, {
                    data: data,
                    isDetail: resNo != ""
                });
                commit(types.SET_LOADING, false);
            })
            .catch(err => {
                alert(err);
                commit(types.SET_LOADING, false);
            });

    }
}

const mutations = {
    [types.FETCH_KOMICA](state, data) {

        let temp = data.data.map(function(item) {
            item.text = item.text.replace(/onclick/g, 'data-qlink').replace(/href/g, 'data-href');
            item.replyPost = item.replyPost.map(function(reply) {
                reply.text = reply.text.replace(/onclick/g, 'data-qlink').replace(/href/g, 'data-href');
                return reply;
            })
            return item;
        });

        if (data.isDetail) {
            state.DetailPost = temp[0];
        } else {
            state.Posts = temp;
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}