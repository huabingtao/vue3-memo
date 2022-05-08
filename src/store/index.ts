import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { FINISH_KEY, LIST_KEY, TODO_KEY, TRASH_KEY } from '../assets/js/constant';

// 为 store state 声明类型
export interface State {
  list: string[],
  todolist: string[],
  finishlist: string[],
  trashlist: string[],
}
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    list: JSON.parse(localStorage.getItem(LIST_KEY) || "[]"),
    todolist: JSON.parse(localStorage.getItem(TODO_KEY) || "[]"),
    finishlist: JSON.parse(localStorage.getItem(FINISH_KEY) || "[]"),
    trashlist: JSON.parse(localStorage.getItem(TRASH_KEY) || "[]"),
  },
  getters: {

  },
  mutations: {
    setList(state,list){
      state.list = list
    },
    setTodolist(state,list){
      state.todolist = list
    }
  },
  actions: {
    // addItem({commit},list){
    //   commit('setList',list)
    // },
    addTodoItem({commit,state}, item){
      // commit('setList',list)
      const todolist = state.todolist.slice()
      todolist.push(item)
      commit('setTodolist',todolist)
    },
  }
});
