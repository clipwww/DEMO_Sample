import * as types from '../mutations_type.js';
import Guid from 'guid';

const state = {
    todos: [
        { key: Guid.create().value, content: 'vue.js 2.0', done: true },
        { key: Guid.create().value, content: 'vuex', done: false },
    ]
}

const getters = {
    getDone: state => {
        return state.todos.filter((item) => {
            return item.done
        })
    },
    getTodo: state => {
        return state.todos.filter((item) => {
            return !item.done
        })
    }
}

const actions = {
    addTodo({ commit }, newTodo) {
        console.log('actionAddTodo');
        commit(types.ADD_TODO, newTodo);
    },
    toggleTodo({ commit }, key) {
        console.log("toggleTodo");
        commit(types.TOGGLE_TODO, key);
    },
    deleteTodo({ commit }, key) {
        console.log("deleteTodo");
        commit(types.DELETE_TODO, key);
    },
    updateTodo({ commit }, obj) {
        console.log('updateTodo', obj);
        commit(types.UPDATE_TODO, obj);
    }
}

const mutations = {
    [types.ADD_TODO](state, newTodo) {
        state.todos.push({
            key: Guid.create().value,
            content: newTodo, // 新 todo 的內容
            done: false // 預設當然是未做完
        });
    },
    [types.TOGGLE_TODO](state, key) {
        state.todos.map((item) => {
            if (item.key == key) {
                item.done = !item.done;
                console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
                return false;
            }
        })
    },
    [types.DELETE_TODO](state, key) {
        for (var i in state.todos) {
            var item = state.todos[i];
            if (item.key === key) {
                console.log('DELETE_TODO:', item.content, ', index?', i);
                state.todos.splice(i, 1);
                break;
            }
        }
    },
    [types.UPDATE_TODO](state, obj) {
        for (var i in state.todos) {
            var item = state.todos[i];
            if (item.key === obj.key) {
                console.log('UPDATE_TODO:', item.content, ' to →', obj.change);
                // 找到 todo 更新 content
                state.todos[i].content = obj.change;
                break;
            }
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}