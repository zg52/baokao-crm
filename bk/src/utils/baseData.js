/*
 * @Author: Jeason Jing
 * @Date: 2018-11-28 11:19:21
 * @Last Modified by: Jeason Jing
 * @Last Modified time: 2019-01-31 10:06:04
 */
export const baseData = {
  // 客户级别
  customerLevel: [
    {
      id: '1',
      key: '1',
      text: 'S类'
    }, {
      id: '2',
      key: '2',
      text: 'A1类'
    },
    {
      id: '3',
      key: '3',
      text: 'A2类'
    },
    {
      id: '4',
      key: '4',
      text: 'Z类'
    }
  ],
  // 客户性质
  customerNature: [{ 'id': '637C7C775FBD586FE05377DE18ACEFDE', 'key': 'group', 'parent_id': '', 'text': '组织' }],
  // 客户状态
  customerStatus: [
    {
      'id': '637C7C775FDB586FE05377DE18ACEFDE',
      'key': 'active',
      'parent_id': '',
      'text': '活跃'
    },
    {
      'id': '637C7C775FDC586FE05377DE18ACEFDE',
      'key': 'dormant',
      'parent_id': '',
      'text': '休眠',
      'type': 'create'
    },
    {
      'id': '637C7C775FDC586FE05377DE18ACEFFE',
      'key': 'cancel',
      'parent_id': null,
      'text': '作废',
      'type': 'create'
    }
  ],
  // 客户类别
  category: [
    {
      id: '1',
      key: '1',
      text: '潜客'
    },
    {
      id: '2',
      key: '2',
      text: '保客'
    }
  ],
  // 性别
  sexList: [
    {
      'id': '637C7C77601B586FE05377DE18ACEFDE',
      'key': '01',
      'parent_id': '',
      'text': '男'
    },
    {
      'id': '637C7C77601C586FE05377DE18ACEFDE',
      'key': '02',
      'parent_id': '',
      'text': '女'
    }
  ],
  // 文化程度
  educationDegree: [
    {
      'id': '637C7C776036586FE05377DE18ACEFDE',
      'key': 'primary',
      'parent_id': '',
      'text': '小学'
    },
    {
      'id': '637C7C776037586FE05377DE18ACEFDE',
      'key': 'middle',
      'parent_id': '',
      'text': '中学'
    },
    {
      'id': '637C7C776038586FE05377DE18ACEFDE',
      'key': 'college',
      'parent_id': '',
      'text': '大学'
    }
  ],
  // 层级
  Linkmanlevel: [
    {
      'id': 'LINKMANLEVEL01',
      'key': '01',
      'parent_id': null,
      'text': '决策层'
    },
    {
      'id': 'LINKMANLEVEL02',
      'key': '02',
      'parent_id': null,
      'text': '管理层'
    },
    {
      'id': 'LINKMANLEVEL03',
      'key': '03',
      'parent_id': null,
      'text': '使用层'
    }
  ],
  // 影响力
  Influence: [
    {
      'id': 'Influence01',
      'key': '01',
      'parent_id': null,
      'text': '高'
    },
    {
      'id': 'Influence02',
      'key': '02',
      'parent_id': null,
      'text': '中'
    },
    {
      'id': 'Influence03',
      'key': '03',
      'parent_id': null,
      'text': '低'
    }
  ],
  // 对bfda态度
  attitude: [
    {
      'id': 'attitude01',
      'key': '01',
      'parent_id': null,
      'text': '支持'
    },
    {
      'id': 'attitude02',
      'key': '02',
      'parent_id': null,
      'text': '抵触'
    },
    {
      'id': 'attitude03',
      'key': '03',
      'parent_id': null,
      'text': '中立'
    }
  ],
  // 联系人状态
  linkManStatus: [
    {
      'id': '637C7C775F7D586FE05377DE18ACEFDE',
      'key': 'Y',
      'parent_id': '',
      'text': '有效'
    },
    {
      'id': '637C7C775F7E586FE05377DE18ACEFDE',
      'key': 'N',
      'parent_id': '',
      'text': '失效'
    }
  ],
  // 车辆状态
  carStatus: [
    {
      'id': 'carStatus01',
      'key': '01',
      'parent_id': null,
      'text': '库存'
    },
    {
      'id': 'carStatus02',
      'key': '02',
      'parent_id': null,
      'text': '订单生产'
    },
    {
      'id': 'carStatus03',
      'key': '03',
      'parent_id': null,
      'text': '经销商调剂'
    }
  ],
  // 车辆整备
  carHostlings: [
    {
      'id': 'carHostlings01',
      'key': '01',
      'parent_id': null,
      'text': '未整备'
    },
    {
      'id': 'carHostlings02',
      'key': '02',
      'parent_id': null,
      'text': '已整备'
    }
  ],
  // 培训状态
  trainStatus: [
    {
      'id': 'trainStatus01',
      'key': '01',
      'parent_id': null,
      'text': '未培训'
    },
    {
      'id': 'trainStatus02',
      'key': '02',
      'parent_id': null,
      'text': '已培训'
    }
  ],
  // 状态 --车联网 福田e家
  ehomeStatus: [
    {
      'id': '01',
      'key': '01',
      'parent_id': null,
      'text': '未安装培训'
    },
    {
      'id': '02',
      'key': '02',
      'parent_id': null,
      'text': '已安装培训'
    }
  ],
  // 核对状态
  checkStatus: [
    {
      'id': 'checkStatus01',
      'key': '01',
      'parent_id': null,
      'text': '相符'
    },
    {
      'id': 'checkStatus02',
      'key': '02',
      'parent_id': null,
      'text': '不符'
    }
  ],
  // 方案类型
  caseType: [
    {
      'id': 'caseType01',
      'key': '01',
      'parent_id': null,
      'text': '交车培训'
    },
    {
      'id': 'caseType02',
      'key': '02',
      'parent_id': null,
      'text': '承诺核对'
    }
  ],

  // 所属年度
  yearList: [
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' },
    { value: '2027', label: '2027' },
    { value: '2028', label: '2028' }
  ],

  // 痛点分析
  painSelect: {
    // 利润水平
    profitLevelList: [
      { value: '1', label: '高' },
      { value: '2', label: '中' },
      { value: '3', label: '差' }
    ],
    // 成本控制
    costControlList: [
      { value: '1', label: '好' },
      { value: '2', label: '中' },
      { value: '3', label: '差' }
    ],
    // 驾驶人员
    driverList: [
      { value: '1', label: '充足满意' },
      { value: '2', label: '充足不满意' },
      { value: '3', label: '短缺' }
    ],
    // 服务响应
    serviceResponseList: [
      { value: '1', label: '响应快技术好' },
      { value: '2', label: '响应快技术差' },
      { value: '3', label: '响应慢技术差' }
    ],
    // 资金效率
    capitalEfficiencyList: [
      { value: '1', label: '资金充足流转快' },
      { value: '2', label: '资金充足流转慢' },
      { value: '2', label: '资金短缺流转快' },
      { value: '2', label: '资金短缺流转慢' }
    ],
    // 配件供给
    partsSupplyList: [
      { value: '1', label: '及时' },
      { value: '2', label: '不及时' }
    ],
    // 车辆出勤率
    carAttendanceRateList: [
      { value: '1', label: '高' },
      { value: '2', label: '中' },
      { value: '3', label: '差' }
    ]

  },
  // 相关利益方
  profitSelect: {
    // 相关方分类
    typeList: [
      { value: '1', label: '个人' },
      { value: '2', label: '单位' }
    ],
    // 利益方类别
    classificationList: [
      { value: '1', label: '货源方' },
      { value: '2', label: '计算方' },
      { value: '3', label: '计费方' },
      { value: '4', label: '价值链上游' },
      { value: '5', label: '价值链下游' },
      { value: '6', label: '其他' }
    ]
  },
  // 民族
  nation: [
    {
      'id': '637C7C775FE2586FE05377DE18ACEFDE',
      'key': 'Han',
      'parent_id': '',
      'text': '汉族'
    },
    {
      'id': '637C7C775FE3586FE05377DE18ACEFDE',
      'key': 'Zhuang',
      'parent_id': '',
      'text': '壮族'
    },
    {
      'id': '637C7C775FE4586FE05377DE18ACEFDE',
      'key': 'Manchu',
      'parent_id': '',
      'text': '满族'
    },
    {
      'id': '637C7C775FFD586FE05377DE18ACEFDE',
      'key': 'NaxiMinority',
      'parent_id': '',
      'text': '纳西族'
    },
    {
      'id': '637C7C775FFC586FE05377DE18ACEFDE',
      'key': 'Wa',
      'parent_id': '',
      'text': '佤族'
    },
    {
      'id': '637C7C775FFB586FE05377DE18ACEFDE',
      'key': 'Aquarium',
      'parent_id': '',
      'text': '水族'
    },
    {
      'id': '637C7C775FFA586FE05377DE18ACEFDE',
      'key': 'TheLahuFamily',
      'parent_id': '',
      'text': '拉祜族'
    },
    {
      'id': '637C7C775FF9586FE05377DE18ACEFDE',
      'key': 'Gaoshan',
      'parent_id': '',
      'text': '高山族'
    },
    {
      'id': '637C7C775FF8586FE05377DE18ACEFDE',
      'key': 'DongxiangNationality',
      'parent_id': '',
      'text': '东乡族'
    },
    {
      'id': '637C7C775FF7586FE05377DE18ACEFDE',
      'key': 'Gelao',
      'parent_id': '',
      'text': '仡佬族'
    },
    {
      'id': '637C7C775FF6586FE05377DE18ACEFDE',
      'key': 'Lisu',
      'parent_id': '',
      'text': '傈僳族'
    },
    {
      'id': '637C7C775FF5586FE05377DE18ACEFDE',
      'key': 'TheSheEthnicGroup',
      'parent_id': '',
      'text': '畲族'
    },
    {
      'id': '637C7C775FF4586FE05377DE18ACEFDE',
      'key': 'Dai',
      'parent_id': '',
      'text': '傣族'
    },
    {
      'id': '637C7C775FF3586FE05377DE18ACEFDE',
      'key': 'Li',
      'parent_id': '',
      'text': '黎族'
    },
    {
      'id': '637C7C775FF2586FE05377DE18ACEFDE',
      'key': 'Kazak',
      'parent_id': '',
      'text': '哈萨克族'
    },
    {
      'id': '637C7C775FF1586FE05377DE18ACEFDE',
      'key': 'Hani',
      'parent_id': '',
      'text': '哈尼族'
    },
    {
      'id': '637C7C775FF0586FE05377DE18ACEFDE',
      'key': 'Bai',
      'parent_id': '',
      'text': '白族'
    },
    {
      'id': '637C7C775FFE586FE05377DE18ACEFDE',
      'key': 'Qiang',
      'parent_id': '',
      'text': '羌族'
    },
    {
      'id': '637C7C775FFF586FE05377DE18ACEFDE',
      'key': 'Tu',
      'parent_id': '',
      'text': '土族'
    },
    {
      'id': '637C7C776000586FE05377DE18ACEFDE',
      'key': 'Molao',
      'parent_id': '',
      'text': '仫佬族'
    },
    {
      'id': '637C7C776001586FE05377DE18ACEFDE',
      'key': 'Siberia',
      'parent_id': '',
      'text': '锡伯族'
    },
    {
      'id': '637C7C776002586FE05377DE18ACEFDE',
      'key': 'Kirgiz',
      'parent_id': '',
      'text': '柯尔克孜族'
    },
    {
      'id': '637C7C776003586FE05377DE18ACEFDE',
      'key': 'Daur',
      'parent_id': '',
      'text': '达斡尔族'
    },
    {
      'id': '637C7C776004586FE05377DE18ACEFDE',
      'key': 'Jinpo',
      'parent_id': '',
      'text': '景颇族'
    },
    {
      'id': '637C7C776005586FE05377DE18ACEFDE',
      'key': 'MaonanEthnicGroup',
      'parent_id': '',
      'text': '毛南族'
    },
    {
      'id': '637C7C776006586FE05377DE18ACEFDE',
      'key': 'Salar',
      'parent_id': '',
      'text': '撒拉族'
    },
    {
      'id': '637C7C776007586FE05377DE18ACEFDE',
      'key': 'TheBrownFamily',
      'parent_id': '',
      'text': '布朗族'
    },
    {
      'id': '637C7C776008586FE05377DE18ACEFDE',
      'key': 'Tajik',
      'parent_id': '',
      'text': '塔吉克族'
    },
    {
      'id': '637C7C776009586FE05377DE18ACEFDE',
      'key': 'Achang',
      'parent_id': '',
      'text': '阿昌族'
    },
    {
      'id': '637C7C77600A586FE05377DE18ACEFDE',
      'key': 'Pumi',
      'parent_id': '',
      'text': '普米族'
    },
    {
      'id': '637C7C77600B586FE05377DE18ACEFDE',
      'key': 'Ewenki',
      'parent_id': '',
      'text': '鄂温克族'
    },
    {
      'id': '637C7C77600C586FE05377DE18ACEFDE',
      'key': 'Nu',
      'parent_id': '',
      'text': '怒族'
    },
    {
      'id': '637C7C77600D586FE05377DE18ACEFDE',
      'key': 'Jing',
      'parent_id': '',
      'text': '京族'
    },
    {
      'id': '637C7C77600E586FE05377DE18ACEFDE',
      'key': 'TheJinuo',
      'parent_id': '',
      'text': '基诺族'
    },
    {
      'id': '637C7C77600F586FE05377DE18ACEFDE',
      'key': 'DeAngzu',
      'parent_id': '',
      'text': '德昂族'
    },
    {
      'id': '637C7C776010586FE05377DE18ACEFDE',
      'key': 'Baoan',
      'parent_id': '',
      'text': '保安族'
    },
    {
      'id': '637C7C776012586FE05377DE18ACEFDE',
      'key': 'Russian',
      'parent_id': '',
      'text': '俄罗斯族'
    },
    {
      'id': '637C7C776013586FE05377DE18ACEFDE',
      'key': 'Yugur',
      'parent_id': '',
      'text': '裕固族'
    },
    {
      'id': '637C7C776014586FE05377DE18ACEFDE',
      'key': 'UzbekBuick',
      'parent_id': '',
      'text': '乌孜别克族'
    },
    {
      'id': '637C7C776015586FE05377DE18ACEFDE',
      'key': 'Menbacou',
      'parent_id': '',
      'text': '门巴族'
    },
    {
      'id': '637C7C776016586FE05377DE18ACEFDE',
      'key': 'Oroqen',
      'parent_id': '',
      'text': '鄂伦春族'
    },
    {
      'id': '637C7C776017586FE05377DE18ACEFDE',
      'key': 'Derung',
      'parent_id': '',
      'text': '独龙族'
    },
    {
      'id': '637C7C776018586FE05377DE18ACEFDE',
      'key': 'Tatar',
      'parent_id': '',
      'text': '塔塔尔族'
    },
    {
      'id': '637C7C776019586FE05377DE18ACEFDE',
      'key': 'Hezhe',
      'parent_id': '',
      'text': '赫哲族'
    },
    {
      'id': '637C7C77601A586FE05377DE18ACEFDE',
      'key': 'LhobaPeople',
      'parent_id': '',
      'text': '珞巴族'
    },
    {
      'id': '637C7C775FE5586FE05377DE18ACEFDE',
      'key': 'Hui',
      'parent_id': '',
      'text': '回族'
    },
    {
      'id': '637C7C775FE6586FE05377DE18ACEFDE',
      'key': 'Miao',
      'parent_id': '',
      'text': '苗族'
    },
    {
      'id': '637C7C775FE7586FE05377DE18ACEFDE',
      'key': 'Uygur',
      'parent_id': '',
      'text': '维吾尔族'
    },
    {
      'id': '637C7C775FE8586FE05377DE18ACEFDE',
      'key': 'Tujia',
      'parent_id': '',
      'text': '土家族'
    },
    {
      'id': '637C7C775FE9586FE05377DE18ACEFDE',
      'key': 'Yi',
      'parent_id': '',
      'text': '彝族'
    },
    {
      'id': '637C7C775FEA586FE05377DE18ACEFDE',
      'key': 'Mongolian',
      'parent_id': '',
      'text': '蒙古族'
    },
    {
      'id': '637C7C775FEB586FE05377DE18ACEFDE',
      'key': 'Tibetan',
      'parent_id': '',
      'text': '藏族'
    },
    {
      'id': '637C7C775FEC586FE05377DE18ACEFDE',
      'key': 'Buyi',
      'parent_id': '',
      'text': '布依族'
    },
    {
      'id': '637C7C775FED586FE05377DE18ACEFDE',
      'key': 'Dong',
      'parent_id': '',
      'text': '侗族'
    },
    {
      'id': '637C7C775FEE586FE05377DE18ACEFDE',
      'key': 'Yao',
      'parent_id': '',
      'text': '瑶族'
    },
    {
      'id': '637C7C775FEF586FE05377DE18ACEFDE',
      'key': 'Korean',
      'parent_id': '',
      'text': '朝鲜族'
    }
  ],
  // 521阶段1-需求识别 2-方案呈现 3-客户成交 4-完美交付 5-持续关爱 6-完成
  stage: [
    {
      'id': 1,
      'key': '1',
      'parent_id': '',
      'text': '需求识别'
    },
    {
      'id': 2,
      'key': '2',
      'parent_id': '',
      'text': '方案呈现'
    },
    {
      'id': 3,
      'key': '3',
      'parent_id': '',
      'text': '客户成交'
    },
    {
      'id': 4,
      'key': '4',
      'parent_id': '',
      'text': '完美交付'
    },
    {
      'id': 5,
      'key': '5',
      'parent_id': '',
      'text': '持续关爱'
    }
    // fixedError 原型没有完成
    // {
    //   'id': 6,
    //   'key': '6',
    //   'parent_id': '',
    //   'text': '完成'
    // }
  ],
  // evaluateType 评价类型 1.自评 2.上级评价 3.不再允许评论
  evaluateType: [
    {
      'id': '1',
      'type': '1',
      'parent_id': '',
      'text': '自我评价'
    },
    {
      'id': '2',
      'type': '2',
      'parent_id': '',
      'text': '上级评价'
    },
    {
      'id': '3',
      'type': '3',
      'parent_id': '',
      'text': '不予评论'
    }
  ],
  // 付款形式 payMode (string, optional): 付款方式：1-现款 2-融资 3-贷款
  payMode: [
    {
      'id': 1,
      'key': 1,
      'parent_id': '',
      'text': '现款'
    },
    {
      'id': 2,
      'key': 2,
      'parent_id': '',
      'text': '融资'
    },
    {
      'id': 3,
      'key': 3,
      'parent_id': '',
      'text': '贷款'
    }
  ],
  // deliveryType (integer, optional): 交付形式：1-一次性交付 2-批次交付
  deliveryType: [
    {
      'id': 1,
      'key': 1,
      'parent_id': '',
      'text': '一次性交付'
    },
    {
      'id': 2,
      'key': 2,
      'parent_id': '',
      'text': '批次交付'
    }
  ],
  // status 合同状态 1.签订、2.废弃
  status: [
    {
      'id': 1,
      'key': 1,
      'parent_id': '',
      'text': '签订'
    },
    {
      'id': 2,
      'key': 2,
      'parent_id': '',
      'text': '废弃'
    }
  ],
  // 活动方案核教结果
  activityResult: [
    {
      'id': '1',
      'key': '1',
      'parent_id': '',
      'text': '达标'
    },
    {
      'id': '2',
      'key': '2',
      'parent_id': '',
      'text': '不达标'
    }
  ],
  // 审核状态 status (integer, optional): 1-待审核 2-通过 3-驳回
  auditStatus: [
    {
      'id': '1',
      'key': '1',
      'parent_id': '',
      'text': '待审核'
    },
    {
      'id': '2',
      'key': '2',
      'parent_id': '',
      'text': '通过'
    },
    {
      'id': '3',
      'key': '3',
      'parent_id': '',
      'text': '驳回'
    }
  ],
  // 审核类型 01阶段审核，02开发关闭
  auditType: [
    {
      'id': '01',
      'key': '01',
      'parent_id': '',
      'text': '阶段审批'
    },
    {
      'id': '02',
      'key': '02',
      'parent_id': '',
      'text': '开发关闭'
    }
  ],
  // 活动状态 -- 关爱 方案校核 状态 // 01 已创建 02 进行中 03 已废弃 04 已完成 ' ' 未完成
  planCheckStatus: [
    {
      'id': '01',
      'key': '01',
      'parent_id': '',
      'text': '已创建'
    },
    {
      'id': '02',
      'key': '02',
      'parent_id': '',
      'text': '进行中'
    },
    {
      'id': '03',
      'key': '03',
      'parent_id': '',
      'text': '废弃'
    },
    {
      'id': '04',
      'key': '04',
      'parent_id': '',
      'text': '已完成'
    },
    {
      'id': '',
      'key': '',
      'parent_id': '',
      'text': '未完成'
    },
    {
      'id': null,
      'key': null,
      'parent_id': '',
      'text': '未完成'
    }
  ],
  // 战后分析 -- 战绩
  recordStatus: [
    {
      'id': '01',
      'key': '01',
      'parent_id': '',
      'text': '战胜'
    },
    {
      'id': '02',
      'key': '02',
      'parent_id': '',
      'text': '战败'
    },
    {
      'id': '03',
      'key': '03',
      'parent_id': '',
      'text': '跟进中'
    }
  ],
  // 战后分析 -- 战绩
  discardReasonArr: [
    {
      'id': '1',
      'key': '1',
      'parent_id': '',
      'text': '经识别为挂靠公司'
    },
    {
      'id': '2',
      'key': '2',
      'parent_id': '',
      'text': '经识别为散户客户'
    },
    {
      'id': '3',
      'key': '3',
      'parent_id': '',
      'text': '经识别客户已注销工商注册或不再营运'
    },
    {
      'id': '4',
      'key': '4',
      'parent_id': '',
      'text': '经识别为轻卡客户'
    },
    {
      'id': '5',
      'key': '5',
      'parent_id': '',
      'text': '重复创建'
    },
    {
      'id': '6',
      'key': '6',
      'parent_id': '',
      'text': '经识别为改装厂'
    },
    {
      'id': '7',
      'key': '7',
      'parent_id': '',
      'text': '其他(需备注注明)'
    }
  ],
  // 评价 -- 好评差评
  thumbArr: [
    {
      'id': '1',
      'key': '1',
      'parent_id': '',
      'text': '好评'
    },
    {
      'id': '2',
      'key': '2',
      'parent_id': '',
      'text': '差评'
    },
    {
      'id': '0',
      'key': '0',
      'parent_id': '',
      'text': '中评'
    }
  ],
  // 行销活动 ----行销活动类别
  activityCategoryArr: [
    {
      'id': '1',
      'key': '1',
      'parent_id': '',
      'text': 'BFDA活动'
    },
    {
      'id': '2',
      'key': '2',
      'parent_id': '',
      'text': '经销商活动'
    }
  ],
  // 行销活动 ----是否类别
  booleanArr: [
    {
      'id': 1,
      'key': 1,
      'parent_id': '',
      'text': '是'
    },
    {
      'id': 2,
      'key': 2,
      'parent_id': '',
      'text': '否'
    }
  ],
  sellstandstatus: [
    {
      'id': 1,
      'key': 1,
      'parent_id': '',
      'text': '有效'
    },
    {
      'id': 0,
      'key': 0,
      'parent_id': '',
      'text': '作废'
    }
  ],
  // 行销计划支持标准状态1-有效,0-作废
  sellplansupportStatus: [
    {
      'id': '1',
      'key': '1',
      'parent_id': null,
      'text': '有效'
    },
    {
      'id': '0',
      'key': '0',
      'parent_id': null,
      'text': '作废'
    }
  ]

}

