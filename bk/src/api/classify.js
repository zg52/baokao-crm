// import request from '@/utils/request'
import axios from 'axios'
/**
 * 获取大类-类型
 *
 * @export
 * @param {*} data
 * @returns
 */
export function typeId () {
  return axios({
    url: 'api/public/getType',
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
    url: 'api/public/getProvAndPici',
    method: 'get'
  })
}

/**
 * 根绝筛选的条件获取对应html
 *
 * @export
 * @param {*} data
 * @returns
 */
export function getIndexList (data) {
  return axios({
    url: 'api/list/getIndexList',
    method: 'post',
    data
  })
}
