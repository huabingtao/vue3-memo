<template>
  <div class="search">
    <van-search v-model="query" placeholder="请输入搜索关键词" />
    <!-- <input type="text" :placeholder="placeholder" v-model="query" /> -->
    <!-- <input type="submit" value="提交" @click="submit">
    <van-button type="primary">主要按钮</van-button> -->
  </div>
</template>

<script>
// import { ref } from '@vue/reactivity';
import useSearch from './use-search';

export default {
  name: "TopSearch",
  props: {
    placeholder: {
      type: String,
      default: '请输入',
    },
    modelValue: String,
  },
	emits: ['submit','update:modelValue'],
  setup(props,{emit}) {
    const { query } = useSearch(props,emit);
		const submit = () => {
      console.log(11111);
			emit('submit')
		}
    return {
      query,
			submit
    };
  },
};
</script>

<style lang="scss">
.search{
  margin-bottom:20px
}
</style>
