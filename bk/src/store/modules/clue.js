// 线索id 状态
const clues = {
  state: {
    leadsId: '',
    cluetype: '',
    cluecode: '',
    clueResult: '',
    businessId: '',
    isUploadFile: '',
    hasRemark: '',
    cluesIsSave: '',
    clueTabid: ''
  },
  mutations: {
    SET_LEADSID: (state, leadsId) => {
      state.leadsId = leadsId
    },
    SET_CLUETYPE: (state, type) => {
      state.cluetype = type
    },
    SET_CLUECODE: (state, code) => {
      state.cluecode = code
    },
    SET_CLUERESULT: (state, result) => {
      state.clueResult = result
    },
    SET_BUSINESSID: (state, id) => {
      state.businessId = id
    },
    SET_ISUPLOAD: (state, count) => {
      state.isUploadFile = count
    },
    SET_HASREMARK: (state, remark) => {
      state.hasRemark = remark
    },
    SET_ISSAVE: (state, isSave) => {
      state.cluesIsSave = isSave
    },
    SET_CLUETABID: (state, clueTabid) => {
      state.clueTabid = clueTabid
    }
  },
  actions: {
    // 设置子页签类型 detail 、edit 、create
    setTabType({ commit }, tabtype) {
      commit('SET_CLUETYPE', tabtype)
    },
    // 编辑线索设置leadsId
    setCluesId({ commit }, id) {
      commit('SET_LEADSID', id)
    },
    setCluesCode({ commit }, code) {
      commit('SET_CLUECODE', code)
    },
    setCluesResult({ commit }, result) {
      commit('SET_CLUERESULT', result)
    },
    setBusinessId({ commit }, id) {
      commit('SET_BUSINESSID', id)
    },
    checkIsUploadFile({ commit }, count) {
      commit('SET_ISUPLOAD', count)
    },
    checkHasRemark({ commit }, remark) {
      commit('SET_HASREMARK', remark)
    },
    IsSaveClues({ commit }, isSave) {
      commit('SET_ISSAVE', isSave)
    },
    clueTabid({ commit }, clueTabid) {
      commit('SET_CLUETABID', clueTabid)
    }
  }
}

export default clues
