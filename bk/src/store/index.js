import Vue from 'vue'
import Vuex from 'vuex'
import typeId from './modules/typeId'
import token from './modules/token'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    typeId,
    token
  },
  getters
})

export default store
