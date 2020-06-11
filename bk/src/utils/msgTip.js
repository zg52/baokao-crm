import Vue from 'vue'
let vm = new Vue()
export function msgTip (x,y,z) {
   vm.$message({
    message: x,
    type:y,
    showClose: z
  })
}

