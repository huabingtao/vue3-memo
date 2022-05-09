<template>
  <div class="detail-container">
    <list :data="listData"></list>
    <add-btn @onClick="openCreateView"></add-btn>
    <create-view ref="createRef"></create-view>
    </div>
</template>

<script setup lang="ts">
import addBtn from "@/components/add-btn/add-btn.vue";
import list from "@/components/list/list.vue";
import CreateView from '../createView/createView.vue';
import { key } from "@/store";
import { computed, ref } from "vue";
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { TodoStatus } from "@/assets/js/enum";

const store = useStore(key)
const createRef = ref(null)
const route = useRoute()
let listData = ref([])

const calcuListData = () => {

  const status = Number(route.query?.status)
  console.log('status:',status);
  console.log('TodoStatus.Todo:',TodoStatus.Todo);

  switch (status) {
    case TodoStatus.Todo:
      console.log(11111);

      listData = computed(() => store.state.todolist)
      break;
    case TodoStatus.Finish:
      listData = computed(() => store.state.finishlist)
      break;
    case TodoStatus.All:
      listData = [...computed(() => store.state.todolist).value,...computed(() => store.state.finishlist).value]
      break;
    default:
      const todolist = computed(() => store.state.todolist)
      const finishlist = computed(() => store.state.finishlist)
      const clist = [...todolist.value,...finishlist.value]

      listData = clist.filter(item=>item.isFavorite)
      break;
  }
}

calcuListData()



// const todolist = computed(() => store.state.todolist)

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
