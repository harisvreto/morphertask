import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    number: {
      busy: false,
      number: null,
      errorMessage: null,
    }
  },
  actions,
  getters,
  mutations,
})

export default store;