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
    const list = computed(() => store.state.list)
    console.log("list:",list);
    const submit = () => {
      console.log('submit:');
      console.log('query:',query.value);
      const clist = list.value.slice()
      clist.push(query.value)

      store.dispatch('addItem', clist)

      localStorage.setItem(LIST_KEY,JSON.stringify(clist))
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
      list
    }
  }

});
</script>

<style >

</style>
