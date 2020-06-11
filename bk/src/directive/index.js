//自定义全局指令
import Vue from 'vue'

  Vue.directive('focus',{
    bind () {

    },
      inserted (el,binding) {
        el.childNodes[1].focus()
        console.log(binding.value)
      }
    })
