/*
 * @Author: Jeason Jing
 * @Date: 2018-11-28 11:38:39
 * @Last Modified by: Jeason Jing
 * @Last Modified time: 2018-11-30 10:47:35
 */
import { addCustomer } from '@/api/custom'

import { approveCheck } from '@/api/approve'
const customer = {
  state: {
    customerId: '',
    tabtype: '',
    tabId: null,
    changed: null,
    customerTabid: ''
  },
  mutations: {
    SET_CUSTOMERID: (state, customerId) => {
      state.customerId = customerId
    },
    SET_TABTYPE: (state, type) => {
      state.tabtype = type
    },
    SET_TABID: (state, tabId) => {
      state.tabId = tabId
    },
    SET_CHANGED: (state, flag) => {
      state.changed = flag
    },
    SET_CKECKTABID: (state, tabid) => {
      state.customerTabid = tabid
    }

  },
  actions: {
    // 新增客户
    addCustom({ commit }, params) {
      return new Promise((resolve, reject) => {
        addCustomer(params).then(res => {
          commit('SET_CUSTOMERID', res.data.customerId)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 能否提审
    isCheckedApprove({ commit }, params) {
      return new Promise((resolve, reject) => {
        approveCheck(params).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 设置子页签类型 detail 、edit 、create
    setTabType({ commit }, tabtype) {
      commit('SET_TABTYPE', tabtype)
    },
    // 编辑客户设置customerid
    setCustomerId({ commit }, id) {
      commit('SET_CUSTOMERID', id)
    },
    // 设置 tab页签id
    setTabId({ commit }, id) {
      commit('SET_TABID', id)
    },
    // 判断 子页签切换
    setChanged({ commit }, flag) {
      commit('SET_CHANGED', flag)
    },
    // 判断 子页签位置
    customerTabid({ commit }, customerTabid) {
      commit('SET_CKECKTABID', customerTabid)
    }

  }
}

export default customer
