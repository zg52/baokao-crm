<template>
  <div class="relative parSldie" id="parSldie">
  <div class="slideBar" id="slideBar">
  <i class="el-icon-s-fold" @click="hideSlideBar($event)" title="收起"></i>
 <a href="/index" class="logo"><img src="../../../assets/image/logo.png" alt=""></a>
    <div class="memu">
   <div class="filter_xls">
    <div
    v-for="(typeId,index) in typeIds"
    :key="typeId.id"
    :class='{active:activeIndex == index}'
    @click.prevent="typeIdHandler(index)"
    >
    <span><i></i> {{ typeId.name  }}</span><i class="el-icon-arrow-right"></i>
    </div>
   </div>
 </div>
</div>
</div>
</template>
<script>
import { mapState, mapmutations } from 'vuex'
import { setSession, getSession } from '@/utils/session'
import { typeId } from '@/api/classify'
export default {
  name: 'SlideBar',
  data () {
    return {
      slideBarHideTip:true,
      typeIds: [],
      activeIndex: 0
    }
  },
  watch: {
    $route: {
      handler (to) {
        //  let oldPath = to.query.id
        //  if (oldPath == getSession('id') && this.typeIds[this.activeIndex].id == getSession('id')) {
        //    this.activeIndex = this.typeIds[this.activeIndex]
        //  }
      },
      deep: true
    }
  },
  methods: {
    hideSlideBar (e) {

        let parSldie = document.getElementById('parSldie')
        let slideBar = document.getElementById('slideBar')
        this.slideBarHideTip ?
            (
            slideBar.style.left = "-360px",
            parSldie.style.marginRight = "-230px",
            e.target.style="right: -165px; top: 27px",
            this.slideBarHideTip = false,
            e.target.setAttribute('title','展开')
            ) :
              (
            slideBar.style.left = "0",
            parSldie.style.marginRight = "45px",
            e.target.style="top:auto;right:0",
            this.slideBarHideTip = true,
             e.target.setAttribute('title','收起')
            )

             },
    typeIdHandler (index) {
      this.activeIndex = index
      this.$router.push({
        query: {
          id: this.typeIds[index].id
        }
      })
      setSession('id',this.typeIds[index].id);
    }
  },
  mounted () {
    let _self = this
    this.$nextTick(function () {
      typeId().then(res => {
        _self.typeIds = res.data.data
        _self.$router.push({
          query: {
            id: getSession('id') ? getSession('id') : _self.typeIds[0].id
          }
         })
         _self.typeIds.map((x,i) => { // 保存tab切换的状态
            x.id == getSession('id') ?
            _self.activeIndex = i : null
         })
      })
    })
  }
}
</script>

<style scoped lang="less">
.el-icon-s-fold {color: #999;font-size: 35px;    position: absolute;cursor: pointer;color: rgba(2, 101, 247, 0.82);
    right: 0;}
.logo {
  margin:54px 0 0 31px;
  display: block;
}
.parSldie,.slideBar {transition: all .4s;}
.slideBar {
position: fixed;
top:0;
left:0;
width:260px;
height:2110px;
background:rgba(246,248,252,1);
box-shadow:0px 8px 31px 0px rgba(20,49,127,0.08), 3px 3px 12px 0px rgba(228,228,228,0.5);
z-index: 9;
}

.filter_xls > div {
width:260px;
height:68px;
line-height: 68px;
cursor: pointer;
transition: all .4s;
}

.filter_xls > div:first-child {
  margin-top:52px;
}
.filter_xls > div span i {
width:20px;
height: 20px;
display: inline-block;vertical-align: sub;transition: all .4s;

}
.filter_xls > div:first-child span i {
background:url('../../../assets/image/typeId_msl1.png') center center no-repeat;
}
.filter_xls > div:nth-child(2) span i {
background:url('../../../assets/image/typeId_tyl1.png') center center no-repeat;
}
.filter_xls > div:nth-child(3) span i {
background:url('../../../assets/image/typeId_msl1.png') center center no-repeat;
}
.filter_xls > div.active {
background:rgba(2,101,247,.82);
span,i {
  color:#fff;
}

}
.filter_xls > div.active:first-child span i {
background:url('../../../assets/image/typeId_msl.png') center center no-repeat;
}
.filter_xls > div.active:nth-child(2) span i {
background:url('../../../assets/image/typeId_tyl.png') center center no-repeat;
}
.filter_xls > div.active:nth-child(3) span i {
background:url('../../../assets/image/typeId_msl.png') center center no-repeat;
}
.filter_xls > div  span {
  padding-left: 50px;
  font-size: 16px;
  color:#364064;
  transition: all .4s;
}
.filter_xls > div span + i {
margin-right: 23px;
float: right;
line-height: 68px;
color: #364064;
}
.relative {position: relative;width:260px;margin-right: 45px;}
</style>
