// 线索id 状态
const sellactive = {
  state: {
    sellactiveId: '',
    sellactiveactiveStatus: '',
    sellactiveMap: '',
    sellactivityCategory: ''
  },
  mutations: {
    SET_SELLACTIVEMAP: (state, sellactiveMap) => {
      state.sellactiveMap = sellactiveMap
    },
    SET_SELLACTIVEID: (state, sellactiveId) => {
      state.sellactiveId = sellactiveId
    },
    SET_SELLACTIVEIDACTIVESTATUS: (state, sellactiveactiveStatus) => {
      state.sellactiveactiveStatus = sellactiveactiveStatus
    },
    SET_CLUETYPE: (state, type) => {
      state.cluetype = type
    },
    SET_SELLACTIVITYCATEGORY: (state, sellactivityCategory) => {
      state.sellactivityCategory = sellactivityCategory
    }
  },
  actions: {
    setSellactiveMap({ commit }, map) {
      commit('SET_SELLACTIVEMAP', map)
    },
    // 设置子页签类型 detail 、edit 、create
    setTabType({ commit }, tabtype) {
      commit('SET_CLUETYPE', tabtype)
    },
    // 编辑线索设置leadsId
    setSellactiveId({ commit }, id) {
      commit('SET_SELLACTIVEID', id)
    },
    setSellactivityCategory({ commit }, id) {
      commit('SET_SELLACTIVITYCATEGORY', id)
    },
    setSellactiveactiveStatus({ commit }, id) {
      commit('SET_SELLACTIVEIDACTIVESTATUS', id)
    }
  }
}

export default sellactive
