<template>
  <div class="home">
    <switch-theme></switch-theme>
    <top-search v-model="query" @submit="submit"></top-search>
    <grid></grid>
    <add-btn></add-btn>
    <!-- <list :list="list"></list> -->
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



export default defineComponent({
  name: 'Home',
  components: {
    TopSearch,
    List,
    Grid,
    SwitchTheme,
    AddBtn  
  },    
  setup(){
    const query = ref("")
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
    return{
      query,
      submit,
      list
    }
  }
  
});
</script>

<style >

</style>
