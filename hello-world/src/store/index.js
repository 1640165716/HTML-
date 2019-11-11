import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        search: {}
    },
    mutations: {
        setAuthor(state, data) {
            state.search = data
        }

    },
    getters: {
        getAuthor(state) {
            return state.search
        }
    },
    actions: {
        setAuthor(context, data) {
            context.commit('setAuthor', data)
        }
    },
})