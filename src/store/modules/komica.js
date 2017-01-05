import * as types from '../mutations_type.js';

const state = {
    Posts: [],
    DetailPosts: [],
}

const getters = {
    getPosts: state => state.Posts,
    getDetailPosts: state => state.DetailPosts,
}

const actions = {
    fetchKomica({ commit }, where, page = 1, res = '') {

        let url = "http://komicaapi.apphb.com/api/" + where + "?page=" + page + "&res=" + res;

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
                commit(types.FETCH_KOMICA, data);
            })
            .catch(err => {
                alert(err);
            });

    }
}

const mutations = {
    [types.FETCH_KOMICA](state, data) {
        state.Posts = data.map(function(item) {
            item.text = item.text.replace(/onclick/g, 'data-qlink').replace(/href/g, 'data-href');
            item.replyPost = item.replyPost.map(function(reply) {
                reply.text = reply.text.replace(/onclick/g, 'data-qlink').replace(/href/g, 'data-href');
                return reply;
            })
            return item;
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}