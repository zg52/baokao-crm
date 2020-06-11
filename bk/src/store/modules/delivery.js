/**
 * 交付tab状态 contractId id状态
 */

const delivery = {
  state: {
    contractId: '',
    deliverytype: '',
    deliveryTabid: ''
  },
  mutations: {
    SET_CONTRACTID: (state, contractId) => {
      state.contractId = contractId
    },
    SET_TABTYPE: (state, deliverytype) => {
      state.deliverytype = deliverytype
    },
    SET_TABID: (state, deliveryTabid) => {
      state.deliveryTabid = deliveryTabid
    }
  },
  actions: {
    setcontractId({ commit }, contractId) {
      commit('SET_CONTRACTID', contractId)
    },
    settabType({ commit }, deliverytype) {
      commit('SET_TABTYPE', deliverytype)
    },
    deliveryTabid({ commit }, deliveryTabid) {
      commit('SET_TABID', deliveryTabid)
    }
  }
}
export default delivery
