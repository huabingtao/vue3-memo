<template>
  <div class="home">
    <switch-theme></switch-theme>
    <top-search v-model="query" @submit="submit"></top-search>
    <grid @onClick="onClickGirdItem"></grid>
    <add-btn :color="'#316af6'" @onClick="openCreateView"></add-btn>
    <create-view ref="createRef"></create-view>
    <router-view v-slot="{ Component }">
      <transition appear name="slide" >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import AddBtn from '@/components/add-btn/add-btn.vue';
import Grid from '@/components/grid/grid.vue';
import SwitchTheme from '@/components/switch-theme/switch-theme.vue';
import TopSearch from '@/components/top-search/top-search.vue';
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import CreateView from './createView/createView.vue';
import { TodoStatus } from '@/assets/js/enum'
import { key } from '@/store';

export default defineComponent({
  name: 'Home',
  components: {
    TopSearch,
    Grid,
    SwitchTheme,
    AddBtn,
    CreateView
  },
  setup(){
    const query = ref("")
    const createRef = ref()

    const store = useStore(key)
    const router = useRouter()
    const todolist = computed(() => store.state.todolist)

    const submit = () => {
      console.log('submit:');
    }

    type statusString = keyof typeof TodoStatus;

    const onClickGirdItem = (status:statusString) => {
      router.push(`/list?status=${status}`)
    }

    const openCreateView = () => {
      createRef?.value?.show()
    }
    return{
      createRef,
      query,
      submit,
      openCreateView,
      todolist,
      onClickGirdItem
    }
  }

});
</script>

<style lang="scss">
.slide-enter-from,.slide-leave-to{
  transform: translate3d(100%,0,0);
}
.slide-enter-active{
  transition: all 0.25s ease-out;
}
.slide-leave-active{
  transition: all 0.2s ease-in;
}
</style>
