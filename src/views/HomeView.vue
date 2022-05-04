<template>
  <div class="home">
    <top-search v-model="query" @submit="submit"></top-search>
    <list :list="list"></list>
  </div>
</template>

<script lang="ts">
import { LIST_KEY } from '@/assets/js/constant';
import List from '@/components/list/list.vue';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex'
import TopSearch from '../components/top-search/top-search.vue';


export default defineComponent({
  name: 'Home',
  components: {
    TopSearch,
    List  
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
