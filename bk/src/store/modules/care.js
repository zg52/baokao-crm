
const care = {
  state: {

    caretabtype: '',
    careTabid: ''
  },
  mutations: {
    // SET_CUSTOMERID: (state, customerId) => {
    //   state.customerId = customerId
    // },
    SET_TABTYPE: (state, type) => {
      state.caretabtype = type
    },
    SET_TABID: (state, tabid) => {
      state.careTabid = tabid
    }
    // // 关爱跳转合同需要521id
    // SET_BUSINESSID: (state, businessId) => {
    //   state.carebusinessId = businessId
    // }
  },
  actions: {

    // 设置子页签类型 detail 、edit 、create
    setCareTabType({ commit }, tabtype) {
      commit('SET_TABTYPE', tabtype)
    },
    // 设置子页签位置
    CareTabId({ commit }, tabid) {
      commit('SET_TABID', tabid)
    }
    // setCarebusinessId({ commit }, id) {
    //   commit('SET_BUSINESSID', id)
    // }

  }
}

export default care
