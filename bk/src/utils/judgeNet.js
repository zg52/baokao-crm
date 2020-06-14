import { msgTip } from './msgTip'
export function judgeNet() {
 let netTimer = setInterval(() => {
  window.navigator.onLine ?
  (
    clearInterval(netTimer),
    console.log('网络ok')
  ) :
  msgTip('网络中断，请检查网络设置！','error',false)
 },1000)
}
