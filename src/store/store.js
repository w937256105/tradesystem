import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isRise: 0,
    tsInformation: null
  },
  mutations: {
    currentTs(state, data){
      state.tsInformation = data
    }
  }
})

export default store