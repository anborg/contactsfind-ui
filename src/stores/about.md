Vuex gives you the ability to break your store up into different modules each of which handles it's own domain (ie. one module handles posts, another users, another comments, etc). 

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