import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types.js'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: null,
        title: '未登录'
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        }
    }
})