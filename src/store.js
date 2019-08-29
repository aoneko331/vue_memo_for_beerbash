import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'memoApp',
  })],
  state: {
    memoItems: [],
  },
  mutations: {
    SAVE(state, val) {
      state.memoItems[val.index].title = val.memo.title
      state.memoItems[val.index].content = val.memo.content
    },
    FETCH(state, val) {
      state.memoItems = val
    },
    DELETE(state, val) {
      state.memoItems.splice(val.index, 1)
    },
    CREATE(state, val) {
      if (state.memoItems === null) {
        state.memoItems = []
      }
      state.memoItems.push(val)
    },
  },
  actions: {
    save({ commit }, val) {
      commit('SAVE', val)
    },
    fetch({ commit }) {
      const strage = JSON.parse(localStorage.getItem('memoApp'))
      commit('FETCH', strage.memoItems)
    },
    create({ commit }, val) {
      commit('CREATE', val)
    },
    delete({ commit }, val) {
      commit('DELETE', val)
    },
  },
})
