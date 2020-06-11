// import { addContract } from '@/api/contract'

const contract = {
  state: {
    contractId: '',
    contracttabtype: '',
    contractNumber: 0,
    contractTabid: ''
  },
  mutations: {
    SET_CONTRACTID: (state, contractId) => {
      state.contractId = contractId
    },
    SET_TABTYPE: (state, type) => {
      state.contracttabtype = type
    },
    SET_NUMBER: (state, number) => {
      state.contractNumber = number
    },
    SET_TABID: (state, tabid) => {
      state.contractTabid = tabid
    }
  },
  actions: {
    // 新增合同
    // addContract({ commit }, params) {
    //   return new Promise((resolve, reject) => {
    //     addContract(params).then(res => {
    //       commit('SET_CONTRACTID', res.data.contractId)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // 设置子页签类型 detail 、edit 、create
    setTabType({ commit }, tabtype) {
      commit('SET_TABTYPE', tabtype)
    },
    // 编辑合同设置contractid
    setContractId({ commit }, id) {
      commit('SET_CONTRACTID', id)
    },
    // 设置车辆数量
    setContractNumber({ commit }, number) {
      commit('SET_NUMBER', number)
    },
    // 判断子页签的位置
    contractTabid({ commit }, tabid) {
      commit('SET_TABID', tabid)
    }
  }
}

export default contract
