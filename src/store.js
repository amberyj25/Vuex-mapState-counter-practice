import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count1: 0,
    count2: 2,
  },
  mutations: {
    counter1(state) {
      state.count1 += 1
    },
    counter2(state) {
      state.count2 += 2;
    }
  }
})