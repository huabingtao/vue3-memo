<template>
  <div class="search">
    <input type="text" :placeholder="placeholder" v-model="query" />
    <input type="submit" value="提交" @click="submit">
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

<style></style>
