import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isRise: 0,
    tsInformation: null,
    gridNum: 2
  },
  mutations: {
    currentTs(state, data){
      state.tsInformation = data
    },
    currentGridNum(state, data) {
      state.gridNum = data
    }
  }
})

export default store