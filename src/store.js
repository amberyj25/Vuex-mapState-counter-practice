import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count1: 0,
    count2: 2,
    newCount1: 5,
    newCount2: 25,
    newCount3: 25,
  },
  mutations: {
    counter1(state) {
      state.count1 += 1
    },
    counter2(state) {
      state.count2 += 2;
    },
    newCounter1(state) {
      state.newCount1 += 150
    },
    newCounter3(state) {
      state.newCount3 += 25
    }
  }
})