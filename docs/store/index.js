import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        eventsRaw: [],
        loaderFeed: {
            // 1: {
            //   start: 123123,
            //   event: 'Mutation',
            //   message: 'Custom message',
            // },
        },
    },
    getters,
    actions,
    mutations,
})