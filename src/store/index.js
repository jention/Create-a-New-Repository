import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const setDataToFack = {
  viewHeiFun: state => {
    return state.viewHei;
  }
};

export default new Vuex.Store({
  state: {
    viewHei : 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
