// set function parseTime,formatTime to filter
export {
  parseTime,
  formatTime
}
  from '@/utils'
import {
  area
} from '@/utils/area'

function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/* 数字 格式化*/
export function numberFormatter(num, digits) {
  const si = [{
    value: 1E18,
    symbol: 'E'
  },
  {
    value: 1E15,
    symbol: 'P'
  },
  {
    value: 1E12,
    symbol: 'T'
  },
  {
    value: 1E9,
    symbol: 'G'
  },
  {
    value: 1E6,
    symbol: 'M'
  },
  {
    value: 1E3,
    symbol: 'k'
  }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 机动车发票验证状态 2.失败 1 成功 0 未验证
 *
 * @export
 * @param {*} validatingStatus
 * @param {*} val
 * @returns
 */

export function fetchValidatingStatus(level) {
  let resultData = ''
  if (level === null || level === '') {
    resultData = ''
  } else if (Number(level) === 2) {
    resultData = '失败'
  } else if (Number(level) === 1) {
    resultData = '成功'
  } else if (Number(level) === 0) {
    resultData = '未验证'
  } else {
    resultData = ''
  }
  return resultData
}

/**
 *
 * 序列化基础数据
 * @export
 * @param {*} arr
 * @param {*} val
 */
export function checkBaseData(val, arr) {
  // console.log(arr)
  if (arr && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (String(arr[i].key) === String(val) || String(arr[i].id) === String(val)) {
        return arr[i].text
      }
      if (arr[i].value === val) {
        return arr[i].label
      }
    }
  }
}

/**
 *
 * 序列化从车型库取出的基础数据
 * @export
 * @param {*} arr
 * @param {*} val   carAttr,scope.row.vehicleAtrr
 */
export function checkGarageBaseData(val, arr) {
  // console.log(arr)
  if (arr && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (String(arr[i].value_code) === String(val)) {
        return arr[i].property_value
      }
      if (arr[i].value_code === val) {
        return arr[i].property_value
      }
    }
  }
}

/**
 * 序列化省
 *
 * @export
 * @param {*} val
 * @returns
 */
export function checkProvince(val) {
  for (let i = 0; i < area.length; i++) {
    if (area[i].code === val) {
      return area[i].area_name
    }
  }
}

export function checkBaseDataorgCode(val, arr) {
// console.log(arr)
  if (arr && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (String(arr[i].orgCode) === String(val) || String(arr[i].sysId) === String(val)) {
        return arr[i].orgName
      }
      // if (arr[i].value === val) {
      //   return arr[i].label
      // }
    }
  }
}

/**
 * 根据省序列化市
 *
 * @export
 * @param {*} val
 * @param {*} cityCode
 */
export function checkCity(cityCode, val) {
  for (let i = 0; i < area.length; i++) {
    if (area[i].code === val) {
      for (let j = 0; j < area[i].children.length; j++) {
        if (area[i].children[j].code === cityCode) {
          return area[i].children[j].area_name
        }
      }
    }
  }
}
// step 转化
export function transStepStatus(status) {
  // if (!status) return
  if (status === 1) { // 正在开发
    // resultData = 'success'
    return 'success'
  } else if (status === 2) { // 审核中
    // resultData = 'finish'
    return 'finish'
  } else if (status === 3 || status === 4 || status === 5) { // 审核驳回
    // resultData = 'error'
    return 'error'
  }

  // return resultData
}

// step 转化
export function transStepText(status) {
  let resultData = ''
  if (status === 1) { // 正在开发
    resultData = '开发中'
  } else if (status === 2) { // 审核中
    resultData = '审核中'
  } else if (status === 3) { // 审核驳回
    resultData = '被驳回'
  } else if (status === 4) { // 战败
    resultData = '已战败'
  } else if (status === 5) { // 放弃
    resultData = '已放弃'
  }

  return resultData
}

// 521阶段转化
export function checkStage(status, title) {
  var temtitle = title
  let resultData = ''
  if (!temtitle) {
    temtitle = '当前阶段：'
  }
  if (status === 1) { // 正在开发
    resultData = temtitle + '需求识别'
  } else if (status === 2) { // 审核中
    resultData = temtitle + '方案呈现'
  } else if (status === 3) { // 审核驳回
    resultData = temtitle + '客户成交'
  } else if (status === 4) { // 战败
    resultData = temtitle + '完美交付'
  } else if (status === 5) { // 放弃
    resultData = temtitle + '持续关爱'
  }
  return resultData
}

export function tagLevel(level) {
  let resultData = ''
  if (level === 1) {
    resultData = 'danger'
  } else if (level === 2) {
    resultData = 'warning'
  } else {
    resultData = ''
  }
  return resultData
}

export function fetchstatus(level) {
  let resultData = ''
  if (level === null || level === '') {
    resultData = ''
  } else if (Number(level) === 1) {
    resultData = '退回'
  } else if (Number(level) === 0) {
    resultData = '已上传'
  } else {
    resultData = ''
  }
  return resultData
}

/**
 * 根据市序列化县
 *
 * @export
 * @param {*} cityCode
 * @param {*} val
 * @returns
 */
export function checkCountry(country, cityCode, val) {
  for (let i = 0; i < area.length; i++) {
    if (area[i].code === val) {
      for (let j = 0; j < area[i].children.length; j++) {
        if (area[i].children[j].code === cityCode) {
          for (let k = 0; k < area[i].children[j].children.length; k++) {
            if (area[i].children[j].children[k].code === country) {
              return area[i].children[j].children[k].area_name
            }
          }
        }
      }
    }
  }
}

// 客户级别format
export function filtersClientLevel(itemStatus, paramType) {
  if (paramType === 'clientLevel') {
    if (itemStatus === '1') {
      return '一级'
    } else if (itemStatus === '2') {
      return '二级'
    } else if (itemStatus === '3') {
      return '三级'
    } else {
      return itemStatus
    }
  } else if (paramType === 'isMainLinkman') {
    if (itemStatus === '1') {
      return '是'
    } else if (itemStatus === '0') {
      return '否'
    } else {
      return itemStatus
    }
  } else if (paramType === 'linkmanLevel') {
    if (itemStatus === '1') {
      return '决策层'
    } else if (itemStatus === '2') {
      return '管理层'
    } else if (itemStatus === '3') {
      return '使用层'
    } else {
      return itemStatus
    }
  } else if (paramType === 'linkmanStatus') {
    if (itemStatus === 'Y') {
      return '有效'
    } else if (itemStatus === 'N') {
      return '无效'
    } else {
      return itemStatus
    }
  } else if (paramType === 'BFDAattitude') {
    if (itemStatus === '01') {
      return '支持'
    } else if (itemStatus === '02') {
      return '抵触'
    } else if (itemStatus === '03') {
      return '中立'
    } else {
      return itemStatus
    }
  } else if (paramType === 'educationDegree') {
    if (itemStatus === 'primary') {
      return '小学'
    } else if (itemStatus === 'middle') {
      return '中学'
    } else if (itemStatus === 'college') {
      return '大学'
    }
  }
}

/**
 * 将手机号中间4位变为*
 *
 * @export
 * @param {*} val
 * @returns
 */
export function checkTel(val) {
  if (val) {
    return val.substr(0, 3) + '****' + val.substr(7)
  }
}

export function formatDate(val) {
  if (val) {
    return val.split(' ')[0]
  }
}

export function formatDateT(val) {
  if (val) {
    return val.split('T')[0]
  }
}

// 转换合同 付款方式
export function formatPay(val) {
  console.log(val)
  if (val) {
    if (val === 1) {
      return '现款'
    } else if (val === 2) {
      return '融资'
    } else {
      return '贷款'
    }
  }
}
// 一体化定制 中金融 管车 服务 二手车分页列表判断
export function formatProduct(val) {
  console.log(val)
  if (val) {
    return '已选择'
  } else {
    return '无'
  }
}

// 截取返回名称字符串过长
export function InterceptName(val) {
  console.log(val)
  if (val && val.length > 9) {
    var valnow = val.substring(0, 9) + '...'
    return valnow
  } else {
    return val
  }
}

// tooltip format
export function tooltip(val) {
  if (val) {
    return val.toString().trim().length <= 8
  }
  return true
}
