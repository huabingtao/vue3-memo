<template>
  <div class="detail-container">
    <list
      :data="listData"
      @onToggleFinish="handleToggleFinish"
      @onViewDetail="handleOnViewDetail"
      @onToggleFavorite="handleOnToggleFavorite"
      @onDeleteMatter="handleDeleteMatter"
      :title="title"
      :color="color"
    ></list>
    <add-btn
      v-if="status === 0 || status === 3"
      :color="color"
      @onClick="openCreateView"
    ></add-btn>
    <create-view
      ref="createRef"
      :data="createData"
      :title="createViewTitle"
      :rightBtnText="rightBtnText"
      :isEdit="{ isEdit }"
    ></create-view>
  </div>
</template>

<script setup lang="ts">
import addBtn from "@/components/add-btn/add-btn.vue";
import list from "@/components/list/list.vue";
import CreateView from "../createView/createView.vue";
import { key } from "@/store";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { TodoStatus } from "@/assets/js/enum";
import { FINISH_KEY, TODO_KEY } from "@/assets/js/constant";

const store = useStore(key);
const createRef = ref(null);
const route = useRoute();
let listData = ref([]);
let title = ref("");
let createViewTitle = ref("");
let rightBtnText = ref("");
let isEdit = ref(false);
let color = ref("");
const createData = ref(null);
const status = Number(route.query?.status);

const todolist = computed(() => store.state.todolist);
const finishlist = computed(() => store.state.finishlist);

watch([todolist, finishlist], () => {
  calcuListData();
});

const handleToggleFinish = ( changeItem, changeIndex) => {
  if (status === TodoStatus.Todo) {
    // first set true for isFinish,then remove the item
    const newtodolist = todolist.value.slice();
    newtodolist.splice(changeIndex, 1);
    localStorage.setItem(TODO_KEY, JSON.stringify(newtodolist));
    changeItem.isFinish = true
    localStorage.setItem(
      FINISH_KEY,
      JSON.stringify([...finishlist.value, changeItem])
    );

    store.commit("setTodolist", newtodolist);
    store.commit("setFinishlist", [...finishlist.value, changeItem]);
  }
  if (status === TodoStatus.Finish) {
    const newFinishList = finishlist.value.slice()
    newFinishList.splice(changeIndex,1)
    changeItem.isFinish = false
    const newTodolist = [changeItem,...todolist.value]
    localStorage.setItem(FINISH_KEY, JSON.stringify(newFinishList));
    localStorage.setItem(
      TODO_KEY,
      JSON.stringify(newTodolist)
    );
    store.commit('setTodolist', newTodolist)
    store.commit('setFinishlist', newFinishList)
  }
  if (status === TodoStatus.All || status === TodoStatus.Flag) {
    const { isFinish, id } = changeItem;
    const newTodolist = todolist.value.slice();
    const newFinishlist = finishlist.value.slice();

    if (isFinish) {
      // if isFinish has true then finishlist less todolist add
      const index = newFinishlist.findIndex(finish=> finish.id === id)
      newFinishlist.splice(index,1)
      changeItem.isFinish = false
      newTodolist.unshift(changeItem);
    } else {
      const index = newTodolist.findIndex((finish) => finish.id === id);
      newTodolist.splice(index, 1);
      changeItem.isFinish = true
      newFinishlist.unshift(changeItem);
    }

    localStorage.setItem(TODO_KEY, JSON.stringify(newTodolist));
    localStorage.setItem(FINISH_KEY, JSON.stringify(newFinishlist));
    store.commit("setTodolist", newTodolist);
    store.commit("setFinishlist", newFinishlist);
  }
};

const calcuListData = () => {
  // 转化事项状态为数字类型
  switch (status) {
    case TodoStatus.Todo:
      title = "待办";
      color = "#316af6";
      listData = computed(() => store.state.todolist);
      break;
    case TodoStatus.Finish:
      title = "已完成";
      color = "#767676";
      listData = computed(() => store.state.finishlist);
      break;
    case TodoStatus.All:
      title = "全部";
      color = "#51565e";
      listData.value = [
        ...computed(() => store.state.todolist).value,
        ...computed(() => store.state.finishlist).value,
      ];
      break;
    default:
      title = "旗标";
      color = "#e99f2f";
      const todolist = computed(() => store.state.todolist);
      const finishlist = computed(() => store.state.finishlist);
      const clist = [...todolist.value, ...finishlist.value];
      listData.value = clist.filter((item) => item.isFavorite);
      break;
  }
};

calcuListData();

const openCreateView = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createData.value = {
    id: 0,
    title: "",
    description: "",
    isFavorite: route.query.status === "3" ? true : false,
    isFinish: false,
    isTrash: false,
  };
  createViewTitle.value = "新建事项";
  rightBtnText.value = "添加";
  isEdit.value = false;
  createRef?.value?.show();
};

const handleOnViewDetail = (item) => {
  createData.value = { ...item };
  createViewTitle.value = "详细信息";
  rightBtnText.value = "完成";
  isEdit.value = true;
  createRef?.value?.show();

  // console.log('createRef?.value:',createRef?.value);

  // console.log('item1:', createRef?.value?.formData.id);
  // createRef?.value?.formData = {}
  // createRef?.value?.formData = "123"
  // createRef?.value?.show()
};

const handleOnToggleFavorite = (id) => {
  const newTodolist = todolist.value.slice();
  const newFinishlist = finishlist.value.slice();
  const todolistIndex = newTodolist.findIndex((item) => item.id === id);
  const finishlistIndex = newFinishlist.findIndex((item) => item.id === id);
  if (todolistIndex > -1) {
    newTodolist[todolistIndex].isFavorite =
      !newTodolist[todolistIndex].isFavorite;
    localStorage.setItem(TODO_KEY, JSON.stringify(newTodolist));
    store.commit("setTodolist", newTodolist);
  }
  if (finishlistIndex > -1) {
    newFinishlist[finishlistIndex].isFavorite =
      !newFinishlist[finishlistIndex].isFavorite;
    localStorage.setItem(FINISH_KEY, JSON.stringify(newFinishlist));
    store.commit("setFinishlist", newFinishlist);
  }
};

const handleDeleteMatter = (id) => {
  const newTodolist = todolist.value.slice();
  const newFinishlist = finishlist.value.slice();
  const todolistIndex = newTodolist.findIndex((item) => item.id === id);
  const finishlistIndex = newFinishlist.findIndex((item) => item.id === id);
  if (todolistIndex > -1) {
    newTodolist.splice(todolistIndex,1)
    localStorage.setItem(TODO_KEY, JSON.stringify(newTodolist))
    store.commit("setTodolist", newTodolist)
  }
  if (finishlistIndex > -1) {
    newFinishlist.splice(finishlistIndex,1)
    localStorage.setItem(FINISH_KEY, JSON.stringify(newFinishlist))
    store.commit("setFinishlist",newFinishlist)
  }
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
