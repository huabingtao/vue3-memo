<template>
  <div class="home">
    <switch-theme></switch-theme>
    <top-search v-model="query" @submit="submit"></top-search>
    <grid></grid>
    <add-btn @onClick="openCreateView"></add-btn>
    <create-view ref="createRef"></create-view>
    <!-- <list :list="list"></list> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { LIST_KEY } from '@/assets/js/constant';
import AddBtn from '@/components/add-btn/add-btn.vue';
import Grid from '@/components/grid/grid.vue';
import List from '@/components/list/list.vue';
import SwitchTheme from '@/components/switch-theme/switch-theme.vue';
import TopSearch from '@/components/top-search/top-search.vue';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex'
import CreateView from './createView/createView.vue';



export default defineComponent({
  name: 'Home',
  components: {
    TopSearch,
    List,
    Grid,
    SwitchTheme,
    AddBtn,
    CreateView
  },
  setup(){

    const query = ref("")
    const createRef = ref(null)
    const store = useStore()
    const todolist = computed(() => store.state.todolist)
    console.log("todolist:",todolist);
    const submit = () => {
      console.log('submit:');

    }

    const openCreateView = () => {

      //@ts-ignore
      createRef?.value?.show()
    }
    return{
      createRef,
      query,
      submit,
      openCreateView,
      todolist
    }
  }

});
</script>

<style >

</style>
