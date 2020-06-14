const user = {
  state: {
    token:'ewe',
    userId:'',
    username:''
  },
  mutations: {
   idChange (state,i) {
    state.msl = i
    state.tyl = i
    state.qtl = i
   },
   nameChange (state,name) {
     state.username = name
   }
  },
  actions: {
}
}
export default user
