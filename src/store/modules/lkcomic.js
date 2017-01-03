import * as types from '../mutations_type.js';

const state = {
    comics: [],
    page: 1
}

const getters = {
    getComics: state => state.comics,
}

const actions = {
    fetchLkComics({ commit }) {
        commit(types.SET_LOADING, true);

        let url = "https://www.lightnovel.cn/forum-141-" + state.page + ".html";
        let YqlUrl = "https://query.yahooapis.com/v1/public/yql?q=" +
            encodeURIComponent("select * from html where url='" + url + "'") +
            "&format=html";

        fetch(YqlUrl)
            .then(res => {
                console.log(res);
                if (res.ok) {
                    return res.text();
                } else {
                    console.error(res);
                    commit(types.SET_LOADING, false);
                }
            })
            .then(data => {
                commit(types.SET_LOADING, false);
                commit(types.FETCH_LK_COMICS, data);
            })
            .catch(err => {
                console.error(err);
                commit(types.SET_LOADING, false);
            })
    }
}

const mutations = {
    [types.FETCH_LK_COMICS](state, data) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "text/xml");
        var $comicList = xmlDoc.querySelectorAll('[id*="normalthread"] a.xst');

        $comicList.forEach(function(item) {
            var titleArray = item.innerHTML.split("][");
            state.comics.push({
                title: titleArray[2],
                num: titleArray[3],
                href: 'LkReader/Detail/' + item.attributes.href.value,
            });
        });

        state.page++;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}