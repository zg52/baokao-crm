// import request from '@/utils/request'
import axios from 'axios'

// 登录
/*
 * @export
 * @param {*} data
 * @returns
 */
let URL = 'https://wechat.yimingyikao.com'
export function login (data) {
  return axios({
    url: URL + '/yk_api/tuser/login',
    method: 'post',
    data
  })
}
/**
 * 获取大类-类型
 *
 * @export
 * @param {*} data
 * @returns
 */
export function typeId () {
  return axios({
    url: URL + '/yk_api/public/getType',
    method: 'get'
  })
}

/**
 * 获取生源地
 *
 * @export
 * @param {*} data
 * @returns
 */
export function getProvAndPici () {
  return axios({
    url: URL + '/yk_api/public/getProvAndPici',
    method: 'get'
  })
}

/**
 * 根绝筛选的条件获取对应html/json/excel
 *
 * @export
 * @param {*} data
 * @returns
 */
export function getIndexList (data) {
  return axios({
    url: URL + '/yk_api/list/getIndexList',
    method: 'post',
    data
  })
}
