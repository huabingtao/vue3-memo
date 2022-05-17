<template>
  <div class="detail-container">
    <list :data="listData" @onChangeData="handleChangeData" :title="title" :color="color"></list>
    <add-btn v-if="status === 0 || status === 3" :color="color" @onClick="openCreateView"></add-btn>
    <create-view ref="createRef"></create-view>
  </div>
</template>

<script setup lang="ts">
import addBtn from "@/components/add-btn/add-btn.vue";
import list from "@/components/list/list.vue";
import CreateView from '../createView/createView.vue';
import { key } from "@/store";
import { computed, ref, watch } from "vue";
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { TodoStatus } from "@/assets/js/enum";
import { FINISH_KEY, TODO_KEY } from "@/assets/js/constant";

const store = useStore(key)
const createRef = ref(null)
const route = useRoute()
let listData = ref([])
let title = ref("")
let color = ref("")
const status = Number(route.query?.status)

const todolist = computed(() => store.state.todolist)
const finishlist = computed(() => store.state.finishlist)

watch(todolist, () => {
  calcuListData();
});

// 处理列表修改的数据
const handleChangeData = (newData) => {

  switch (status) {
    case TodoStatus.Todo:
      const newtodolist = newData.filter(item=> !item.isFinish)
      const newfinishlist = newData.filter(item => item.isFinish)
      localStorage.setItem(TODO_KEY,JSON.stringify(newtodolist))
      localStorage.setItem(FINISH_KEY,JSON.stringify([...finishlist.value,...newfinishlist]))
      store.commit("setTodolist",newtodolist)
      store.commit("setFinishlist",[...finishlist.value,...newfinishlist])
      break;
    case TodoStatus.Finish:
      // const newtodolist = newData.filter(item=> !item.isFinish)
      // const newfinishlist = newData.filter(item => item.isFinish)
      // localStorage.setItem(TODO_KEY,JSON.stringify(newtodolist))
      // localStorage.setItem(FINISH_KEY,JSON.stringify([...finishlist.value,...newfinishlist]))
      // store.commit("setTodolist",newtodolist)
      // store.commit("setFinishlist",[...finishlist.value,...newfinishlist])
    default:

      break;
  }
  console.log('newData:',newData);
}

const calcuListData = () => {
  // 转化事项状态为数字类型
  // listData = ref([])
  switch (status) {
    case TodoStatus.Todo:
      title = "待办"
      color = "#316af6"
      listData = computed(() => store.state.todolist)
      break;
    case TodoStatus.Finish:
      title = "已完成"
      color = "#767676"
      listData = computed(() => store.state.finishlist)
      break;
    case TodoStatus.All:
      title = "全部"
      color = "#51565e"
      listData.value = [...computed(() => store.state.todolist).value,...computed(() => store.state.finishlist).value]
      break;
    default:
      title = "旗标"
      color = "#e99f2f"
      const todolist = computed(() => store.state.todolist)
      const finishlist = computed(() => store.state.finishlist)
      // const arr1 = todolist.value.filter(item=> item.isFavorite)
      // const arr2 = finishlist.value.filter(item => item.isFavorite)
      const clist = [...todolist.value,...finishlist.value]

      listData.value = clist.filter(item=>item.isFavorite)
      break;
  }
}

calcuListData()

const openCreateView = () => {

  //@ts-ignore
  createRef?.value?.show()
}

</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";

.detail-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include background_color("color-list-bg");
}
</style>
