const user = {
  state: {
    token:'ewe',
    userId:'',
    username:'',
    loginOutParams: true
  },
  mutations: {
   idChange (state,i) {
    state.msl = i
    state.tyl = i
    state.qtl = i
   },
   nameChange (state,name) {
     state.username = name
   },
   loginChange (state) {
    state.loginOutParams = false
   }
  },
  actions: {
}
}
export default user
