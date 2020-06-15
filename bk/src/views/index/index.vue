<style scoped lang="less">
/deep/ .el-form-item__label {
  font-size: 18px !important;
  color: #999;
  line-height: 58px;
}
.demo-ruleForm {
  padding-top: 15px;
}
.el-form-item {
  margin-left: 55px;
  margin-right: 55px;
  border-bottom: 1px #f3f3f3 solid;
  margin-bottom: 0;
}
.msgbox {
  /deep/.el-input__inner {
  border: none;
  font-size: 16px;
  color: #364064;
  height: 58px;
  line-height: 58px;
}
}
.demo-ruleForm > div:last-child {
  border: none;
}
/deep/.el-form-item__error {
  top: 40px;
  left: 15px;
  font-size: 14px;
}

.msgbox {
 .nptMsg {
    width: 534px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 31px 0px rgba(20, 49, 127, 0.08),
      3px 3px 12px 0px rgba(228, 228, 228, 0.5);
    border-radius: 9px;
    & > div:first-child {
      width: 535px;
      height: 58px;
      background: rgba(250, 250, 250, 1);
      border-radius: 10px;
      line-height: 58px;
      em {
        width: 18px;
        height: 18px;
        background: url("../../assets/image/msgbox3.png") top center no-repeat;
        cursor: pointer;
      }
      em:hover {
        background: url("../../assets/image/msgbox2.png") top center no-repeat;
      }
      div {
        margin-left: 30px;
        span {
          padding-left: 12px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(54, 64, 100, 1);
        }
      }
      div + em {
        margin-right: 30px;
      }
    }
  }
  & > div:nth-child(2) {
    margin-left: 40px;
    margin-right: 40px;
  }
}
.addTables {
  width: 534px;
  height: 64px;
  background: rgba(46, 128, 248, 1);
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  cursor: pointer;
  margin-top: 10px;
 input + i {
    opacity: .8;
    font-size: 42px;
    vertical-align: middle;
    position: absolute;
   left: 62px;
    top: 12px;
  }
  position: relative;
  input {
    position: absolute;
    width: 100%;
    height: 65px;
    top:0;
    display: block;
    z-index: 99;
    cursor: pointer;
    opacity: 0;
  }
  p {
    font-size: 14px;
    border-bottom: 1px #eee solid;
    display: inline-block;
    width: 200px;
    color: #eee;
    i {
      font-size: 14px;
      position: relative;
      top:-1px;
    }
  }
  div {
    padding-top: 13px;
    padding-bottom: 5px;
  }
}
.checked {
  .addTables {background: #82B3FB;margin-top:18px;}
  .addTables div{
    line-height: 43px;
  }
}
/deep/.el-checkbox__inner {
  width:16px;
height:16px;
border:1px solid rgba(153,153,153,1);
border-radius:50%;
position: relative;
top:-2px;

}
/deep/.el-checkbox__label {
font-size:18px;
font-weight:400;
color:rgba(153,153,153,1);
}
/deep/.el-checkbox__input.is-checked+.el-checkbox__label{
  color: #364064;
}
.checked {
  .el-form {
    padding-top: 33px;
    .ch {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px #F3F3F3 solid;
      padding-bottom: 16px;
      margin-bottom: 20px;
    }
  }
  .ch-last,/deep/.el-form-item {
  border:none!important;
  }
   .ch-last {margin-bottom: 0!important;}

}
.down1,.down2 {cursor: pointer;}
.down1 {
      margin-top: 50px;
    margin-bottom: 50px;
}
/deep/ .el-checkbox__inner::after {
  left:5px;
  top:2px;
}
.filterList {
  display: flex;
  justify-content: space-around;
  width: 1496px;
  margin-top: 40px;
  flex-wrap: wrap;
  & > div {
    box-shadow:0px 8px 31px 0px rgba(20,49,127,0.08), 3px 3px 12px 0px rgba(228,228,228,0.5);
border-radius:9px;
    margin-bottom: 40px;

    width: 730px;
    div:first-child {
      height: 58px;
      background: rgba(250, 250, 250, 1);
      border-radius: 10px;
      line-height: 58px;
      em {
        display: block;
        i {
          font-size: 0;
          display: inline-block;
          width:6px;
          height: 6px;
          border-radius: 50%;
          background: #c3c3c8;
          margin-left: 2px;
          margin-right: 2px;
        }
      }
      div {
        margin-left: 30px;
        span {
          padding-left: 12px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(54, 64, 100, 1);
        }
      }
      div + em {
        margin-right: -4px;
        width: 74px;
      }
    }
    div:nth-child(2) {
      color: #333;
      padding:20px;
    }
    }
  }
  /deep/.paiwei {
    .el-dialog__title {
      font-size: 20px;
    }
    .el-form-item {border:none;.el-form-item__label{line-height: 40px;}}
  }
  /deep/.el-popper {top:46px!important;}
  /deep/.el-select-dropdown__item {font-size: 16px!important;}
  /deep/.el-scrollbar__thumb {opacity: 0;}


  /deep/td {
    border: 1px #2e80f8 solid !important;
    text-align: center!important;
    padding: 3px;
    font-size: 16px!important;
    line-height: 25px;
    align-items: center!important;
}
</style>

<template>
  <div class="index">
    <div class="flexbetween msgbox">
      <div class="nptMsg">
        <div class="flexbetween item-center">
          <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>学生基本信息</span>
          </div>
          <em title="清空" id="empty1" @click="empty1('ruleForm')"></em>
        </div>
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="姓名：" prop="name">
            <el-input v-focus v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="生源地：" prop="syd">
            <el-select v-model="ruleForm.syd" placeholder="请选择生源地" size="small" :popper-append-to-body="false">
              <el-option
                v-for="(syd,index) of syds"
                :label="syd.name"
                :value="syd.name"
                :id="syd.id"
                :key="syd.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文化分：" prop="whf">
            <el-input v-model.number="ruleForm.whf" placeholder="请输入文化分"></el-input>
          </el-form-item>
          <el-form-item label="专业分：" prop="zyf">
            <el-input v-model.number="ruleForm.zyf" placeholder="请输入专业分"></el-input>
          </el-form-item>
          <el-form-item label="英语分：" prop="yy">
            <el-input v-model.number="ruleForm.yy" placeholder="请输入英语分"></el-input>
          </el-form-item>
          <el-form-item label="语文分：" prop="yw">
            <el-input v-model.number="ruleForm.yw" placeholder="请输入语文分"></el-input>
          </el-form-item>
        </el-form>
        <div class="addTables" id="addTables">
          <div>
            <input
            type="file"
            id="addXlsx"
            ref="addXlsx"
            @click="addXlsxHandler($event)"
            @drop="dropXlsxHandler($event)" />
            <i class="el-icon-circle-plus-outline"></i> 点击添加或拖拽表格(xls/excel/xlsx)到这里
          </div>
          <p>{{ fileName }} <i v-if="fileName != '' ? true : false" class="el-icon-circle-check"></i> </p>
        </div>
      </div>
      <div class="nptMsg checked">
        <div class="flexbetween item-center">
          <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>选择筛选条件</span>
          </div>
          <em title="清空" id="empty2" @click="empty2('checkeds')"></em>
        </div>
        <el-form :model="checkeds" ref="checkeds" :rules="rulesCheck">
          <el-form-item prop="type">
            <el-checkbox-group v-model="checkeds.type">
               <div
               v-for="(term,index) of terms"
               :key="term.index"
                class="ch"
                :class="{'ch-last': index == 5}"
                @click="submitTerm('ruleForm',$event,index)">
                <el-checkbox :id="term.value" :label="term.name" name="type"></el-checkbox>
             </div>
           </el-checkbox-group>
          </el-form-item>
        </el-form>

        <div class="addTables" id="addTables">
          <div>
          请选择选择一个或多个筛选条件
          </div>
        </div>
      </div>
      <div>
        <div class="down1" id="down1" @click="down1"><img src="../../assets/image/down1.png" alt=""></div>
         <div class="down1" id="down2" @click="down2"><img src="../../assets/image/down2.png" alt=""></div>
      </div>
    </div>
    <div class="filterList" ref="filterList">
       <div v-show="termNode.lk_term0" ref="lk_term0">
          <div class="flexbetween item-center">
              <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>所有统招院校</span>
          </div>
          <em>
           <i></i>
           <i></i>
           <i></i>
          </em>
        </div>
        <div class="ysl" v-html="termNode.lkCont_term0">
          暂无数据
        </div>
       </div>
        <div v-show="termNode.lk_term1" ref="lk_term1">
          <div class="flexbetween item-center">
              <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>211和985院校</span>
          </div>
          <em>
           <i></i>
           <i></i>
           <i></i>
          </em>
        </div>
        <div class="ysl" v-html="termNode.lkCont_term1">
          暂无数据
        </div>
       </div>
       <!-- 2 -->
        <div v-show="termNode.lk_term2" ref="lk_term2">
          <div class="flexbetween item-center">
              <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>入选双一流院校</span>
          </div>
          <em>
           <i></i>
           <i></i>
           <i></i>
          </em>
        </div>
        <div class="ysl" v-html="termNode.lkCont_term2">
        </div>
       </div>
       <!-- 3 -->
     <div v-show="termNode.lk_term3" ref="lk_term3">
          <div class="flexbetween item-center">
              <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>专业分比重高</span>
          </div>
          <em>
           <i></i>
           <i></i>
           <i></i>
          </em>
        </div>
        <div class="ysl" v-html="termNode.lkCont_term3">
          暂无数据
        </div>
       </div>
        <div v-show="termNode.lk_term4" ref="lk_term4">
          <div class="flexbetween item-center">
              <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>文化分比重高</span>
          </div>
          <em>
           <i></i>
           <i></i>
           <i></i>
          </em>
        </div>
        <div class="ysl" v-html="termNode.lkCont_term4">
          暂无数据
        </div>
       </div>
        <div v-show="termNode.lk_term5" ref="lk_term5">
          <div class="flexbetween item-center">
              <div>
            <i>
              <img src="../../assets/image/msgbox1.png"/>
            </i>
            <span>文化排名录取</span>
          </div>
          <em>
           <i></i>
           <i></i>
           <i></i>
          </em>
        </div>
        <div class="ysl" v-html="termNode.lkCont_term5">
          暂无数据
        </div>
       </div>
  </div>

  <!-- 排位弹窗 -->
  <el-dialog
  class="paiwei"
  title="请输入本省排位/名次"
  :visible.sync="paiweiShow"
  width="30%"
  center>
    <el-form :model="paiwei" ref="paiwei" :inline="true">
        <el-form-item
     label="本省排位/名次："
     prop="pw"
     :rules="[
      { required: true, message: '排位/名次不能为空'},
      { type: 'number', message: '排位/名次必须为数字值'}
    ]"
      >
    <el-input type="age" v-model.number="paiwei.pw" autocomplete="off"></el-input>
  </el-form-item>
    </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="paiweiShow = false">取 消</el-button>
    <el-button type="primary" @click="paiweiDown">确 定</el-button>
  </span>
</el-dialog>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getProvAndPici, getIndexList, termDown } from '@/api/classify'  //接口
import { msgTip } from '@/utils/msgTip' //操作提示
import { judgeNet } from '@/utils/judgeNet'
import Cookies from 'js-cookie'
import '@/directive/index'
import XLSX from 'xlsx/dist/xlsx.full.min'
export default {
  name: "index",
  components: {},
  data() {
    return {
// 表单
      ruleForm: {
        type_id: '',//类型id
        name: '',   //姓名
        syd: '', //生源地
        prov_id: '', //省份id
        whf: '',    //文化分
        zyf: '',    //专业分
        yy: '',     //英语
        yw: '',      //语文
        ks_type: '1', //默认联考
        down: 2,      //默认为2（0-json,1-表格文件，2-html文本）
        token: Cookies.get('token')
      },
      syds: [],     //生源地
      rules: {
        name: [
          { required: true, message: "请输入姓名" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符" }
        ],
        syd: [
          { required: true, message: "请选择生源地" }

        ],
        whf: [
          { required: true, message: "请输入分值" },
          { type: 'number', message: '分值必须为数字值'}
        ],
        zyf: [
          { required: true, message: "请输入分值" },
          { type: 'number', message: '分值必须为数字值'}
        ],
        yy: [
          { required: true, message: "请输入分值" },
          { type: 'number', message: '分值必须为数字值'}
        ],
        yw: [
          { required: true, message: "请输入分值" },
          { type: 'number', message: '分值必须为数字值'}
        ]
      },
      fileName: '',       //导入的文件名字
      fileValue: '',      //input文件value值
      fileValueOld: '',   //导入错误文件时启用
      dropEvent: {},      //存放拖拽事件的event
      switchHandler: true,

// 多选
      checkeds: {
        type: []
      },
      rulesCheck: {
         type: [
            {type: 'array', required: true, message: '请至少选择一个条件', trigger: 'change'}
            ]
      },
       terms: [
               {
                  name:'所有统招院校',
                  value:'lk_all'
               },
               {
                  name:'211和985院校',
                  value:'lk_29'
               },
               {
                  name:'入选双一流院校',
                  value:'lk_syl'
               },
               {
                  name:'专业分比重高',
                  value:'lk_zyfg'
               },
               {
                  name:'文化分比重高',
                  value:'lk_whfg'
               },
               {
                  name:'文化排名录取',
                  value:'lk_whfpm'
               }
             ],
             targetTerm: [ //条件参数
                { lk_all: 1 },
                { lk_29: 1 },
                { lk_syl: 1 },
                { lk_zyfg: 1 },
                { lk_whfg: 1 },
                { lk_whfpm: 1}
             ],
           downSwitch: false, //判断下载类型
          termNode: { //控制根据条件筛选返回html的容器隐藏
            lk_term0: false,
            lk_term1: false,
            lk_term2: false,
            lk_term3: false,
            lk_term4: false,
            lk_term5: false,
            // 筛选返回的html
            lkCont_term0: '',
            lkCont_term1: '',
            lkCont_term2: '',
            lkCont_term3: '',
            lkCont_term4: '',
            lkCont_term5: ''
          },


          paiweiShow: false,  //排位弹出层
          paiwei: {
            pw: ''
          }
    }
  },
  watch: {
    fileName: {
      handler (val) {
      },
      deep: true
    },
    fileValue: {
      handler (val) {
        this.switchHandler ? this.addReadXlsx() : this.dropReadXlsx()
      },
      // deep: true
    }

  },
  computed: {
   ...mapState({
       username:username => username.user.username
     })

  },
  methods: {
  // 读取省份id
  getProv_id (index,e) {
  },
    addXlsxHandler () { //点击得到文件名字
      this.switchHandler = true
      let _this = this
      let  readXlsxTime = setInterval(function () {
        if(_this.$refs.addXlsx.value != undefined) {
            _this.fileValue = _this.$refs.addXlsx.value
        } else {
          clearInterval(readXlsxTime)
        }
       },1000)
  },
  dropXlsxHandler (e) { //拖拽得到文件名字
       this.switchHandler = false
       this.fileValue = e.dataTransfer.files[0].name
       this.dropEvent = e

    },
//读取表格数据到表单
  addReadXlsx () {
    let _this = this
          let file_houzhui = this.fileValue.substring(this.fileValue.lastIndexOf('.'), this.fileValue.length); //得到文件后缀名
           if ('.excel' == file_houzhui || '.xlsx' == file_houzhui || '.xls' == file_houzhui) {
              reading()
           } else {
              msgTip('请添加格式为excel或xlsx的表格文件！','warning',true)
           }
           function reading () {
              let reader = new FileReader();
                let fileMsg = _this.switchHandler ? _this.$refs.addXlsx.files[0] : _this.dropEvent.dataTransfer.files[0]
                reader.readAsBinaryString(fileMsg) //转码为可读的
                reader.onload = function () {
                    let workbook = XLSX.read(reader.result, { type: 'binary' })
                    let sheet0 = workbook.Sheets[workbook.SheetNames[0]]//sheet0代表excel表格中的第一页
                    let str = XLSX.utils.sheet_to_json(sheet0)//利用接口实现转换。p4321ewqy
                        _this.fileName = fileMsg.name
                            if(str[0].姓名  &&
                              str[0].专业分 &&
                              str[0].文化分 &&
                              str[0].生源地 &&
                              str[0].英语   &&
                              str[0].语文) {
                              _this.ruleForm.name = str[0].姓名
                              _this.ruleForm.zyf = str[0].专业分
                              _this.ruleForm.whf = str[0].文化分
                              _this.ruleForm.syd = str[0].生源地
                              _this.ruleForm.yy = str[0].英语
                              _this.ruleForm.yw = str[0].语文
                              _this.$message({
                                message: '表格信息已添加到表单！',
                                type: 'success'
                              })
                              _this.fileValueOld = fileMsg.name
                             } else {
                               msgTip('请检查表格信息是否完整！','warning',true)
                              _this.fileName = _this.fileValueOld //未找到字段切回已添加文件正确的格式
                             }
                }
           }
    },
    dropReadXlsx () {
      this.addReadXlsx()
    },

  // 清空表单
    empty1 (ruleForm) {
       this.$refs[ruleForm].resetFields()
       this.$refs.checkeds.resetFields()
        for(let i = 0; i <= 5; i++) {
         this.termNode['lk_term' + i] = false
       }
       this.fileName = ''
       this.$refs.addXlsx.value = ''
        msgTip('表单信息已清空！','success',true)
    },
      // 清空多选条件
    empty2 (checkeds) {
       this.$refs[checkeds].resetFields()
       for(let i = 0; i <= 5; i++) {
         this.termNode['lk_term' + i] = false
       }
        msgTip('条件已清空！','success',true)
    },
//  多选条件时，验证表单信息
 submitTerm(ruleForm,e,index) {
   let _this = this
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
              // e.target.checked = true
              this.ruleForm.down = 2  //刷选条件，需传入返回html的参数
              this.ruleForm.type_id = this.$route.query.id  //类型参数
              this.syds.map(x => {
              this.ruleForm.syd == x.name ?
              this.ruleForm.prov_id = x.id : String
              });

            switch(index) {
              case index : e.target.checked ?
             (
               _this.termNode['lk_term' + index] = true,
               _this.$refs.filterList.insertBefore(_this.$refs['lk_term' + index],_this.$refs.filterList.childNodes[2]),
               getTermHtml(index)
               ) :
             _this.termNode['lk_term' + index] = false;
             break
            }
              function getTermHtml (idnex) {

                 for (let i = 0; i < _this.targetTerm.length; i++) {
                   let keys = Object.keys(_this.targetTerm[i])[0]
                   _this.ruleForm.hasOwnProperty(keys) ?
                  (new function () {
                    for (let k in _this.ruleForm) {
                      if (k == keys) {
                        delete _this.ruleForm[k]
                      }
                    }
                  }
                  ) : assignHandler()
                 }
                function assignHandler () { // 拉去html文本
                    getIndexList(Object.assign(_this.ruleForm,_this.targetTerm[index])).then(res => {  //得到筛选的数据

                  res.data.data == '' ?
                  _this.termNode['lkCont_term' + index] = '暂无数据...' :
                  _this.termNode['lkCont_term' + index] = res.data
                  })
                }
              }
          } else {
                e.target.checked = false
                msgTip('请先完善学生基本信息！','warning',true)
                this.$E.stopEvent(e) //阻止冒泡
                return
          }
        })
       },
       downStatus () {
         this.$refs.ruleForm.validate((valid) => {
          if (valid) {
             this.$refs.checkeds.validate((valid) => {
          if(valid) {
            // 下载表格
              this.downSwitch = true
          } else {
            msgTip('请至少选择一个筛选条件！','warning',true)
          }
        })
           } else {
           msgTip('请先完善学生基本信息！','warning',true)
          }
    })
       },
  // 结果-按条件返回表格
  down2 () {
    let _this = this
    this.downStatus();
    this.downSwitch == true ? down2Handler() : ''
    function down2Handler () {
      _this.downSwitch = false
      //下载
      _this.ruleForm.down = 1
      let termDownParms = ''
          for (let m in _this.ruleForm) {
            termDownParms += m + '=' + _this.ruleForm[m] + '&'
          }
      termDown(termDownParms).then(res => {  //得到筛选的数据
              if(res.data.data == '') {
                msgTip('暂无数据...')
              } else {
        location.href = 'https://wechat.yimingyikao.com/yk_api/list/getIndexList?' + termDownParms
              }
            })
    }

  },
    // 结果-按位次返回表格
  down1 () {
    let _this = this
    this.downStatus();
    this.downSwitch == true ? down2Handler() : ''
    function down2Handler () {
      _this.downSwitch = false

      _this.paiweiShow = true
      _this.paiweiDown()  //开始下载表格
    }
  },
  paiweiDown () {
   this.$refs.paiwei.validate(valid => {
     if (valid) {
          //开始下载表格
          this.paiweiShow = false
     }
   })
  }
  },
  created () {
  judgeNet()
  },
  mounted () {
    let  _this = this
    this.$nextTick(function () {
      getProvAndPici().then(res => {  //获取查询类型
       _this.syds = res.data.data

      })

// 阻止拖拽相关默认事件
      {
            drags('draleave'); //当被鼠标拖动的对象离开其容器范围内时触发
           drags('dragenter'); //当被鼠标拖动的对象进入其容器范围内时触发
          function drags (handler) {
           _this.$E.addEvent(_this.$refs.addXlsx,handler,function (e) { _this.$E.stopEvent(e) });
          }
      }

    })
  }
}
</script>
