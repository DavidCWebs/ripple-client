import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import credentials from './modules/credentials'
import discover from './modules/discover'
import generate from './modules/generate'
import transact from './modules/transact'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    credentials,
    discover,
    generate,
    transact
  }
})
