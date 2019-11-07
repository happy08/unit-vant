import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabbarShow:true  //是否显示tabbar
  },
  getters:{
    getTabbarShow(state){
        return state.tabbarShow
    }
  },
  mutations: {
    updateTabbarShow(state, payload){
      state.tabbarShow = payload
    }
  },
  actions: {}
});
