// common state, actions named the same (possible because of namespacing)
// and any other domain specific state and logic named as fits
export default {
    namespaced: true,
    state:{
      items:[]
    },
    actions:{
      fetchOne(){},
      fetchAll(){}
    }
  }