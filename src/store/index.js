import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: null,
    total: null
  },
  actions: {
    completeStep({ commit }, step) {
      commit('completeStep', step)
    },
    totalSteps({ commit }, total) {
      commit('totalSteps', total)
    }
  },
  mutations: {
    completeStep(state, step) {
      state.progress = step + 1
    },
    totalSteps(state, total) {
      state.total = total
    }
  },
  getters: {
    progress: (state) => state.progress,
    totalSteps: (state) => state.total
  }
})
