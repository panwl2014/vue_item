import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: ''
  },

  mutations: {
    search(state, val) {
      state.search = val
    }
  },
  actions: {
  },
  modules: {
  }
})
