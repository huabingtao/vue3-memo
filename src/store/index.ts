import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { LIST_KEY } from '../assets/js/constant';

// 为 store state 声明类型
export interface State {
  list: string[]
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    list: JSON.parse(localStorage.getItem(LIST_KEY) || "[]")
  },
  mutations: {
    setList(state,list){      
      state.list = list
    }
  },
  actions: {
    addItem({commit},list){
      commit('setList',list)
    }
  },
  modules: {
  }
});
