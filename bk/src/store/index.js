import Vue from 'vue'
import Vuex from 'vuex'
import typeId from './modules/typeId'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    typeId,
    user
  },
  getters
})

export default store
