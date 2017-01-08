import * as types from '../mutations_type.js';

const state = {
    Posts: [],
    DetailPost: {},
    isDone: false,
}

const getters = {
    getPosts: state => state.Posts,
    getDetailPost: state => state.DetailPost,
    getIsDone: state => state.isDone,
}

const actions = {
    fetchKomica({ commit }, obj) {
        commit(types.SET_LOADING, true);
        let page = obj.page ? obj.page : 0;
        let resNo = obj.res ? "&res=" + obj.res : "";
        let url = "https://komicaapi.apphb.com/api/" + obj.where + "?page=" + page + resNo;

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
                    console.log(res);
                    commit(types.SET_DONE, true);
                }
            })
            .then(data => {
                commit(types.FETCH_KOMICA, {
                    data: data,
                    isDetail: resNo != "",
                    isInit: page === 0
                });
                commit(types.SET_LOADING, false);
            })
            .catch(err => {
                console.log(err);
                commit(types.SET_LOADING, false);
            });

    },
    resetPosts({ commit }) {
        commit(types.RESET_POSTS);
    },
    setIsDone({ commit }, bool) {
        commit(types.SET_DONE, bool);
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
            if (data.isInit) {
                state.Posts = temp;
            } else {
                state.Posts = state.Posts.concat(temp);
            }
        }
    },
    [types.RESET_POSTS](state) {
        state.Posts = [];
    },
    [types.SET_DONE](state, bool) {
        state.isDone = bool;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}