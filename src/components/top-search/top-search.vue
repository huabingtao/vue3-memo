<template>
  <div class="search">
    <van-search v-model="query" placeholder="请输入搜索关键词" />
    <!-- <input type="text" :placeholder="placeholder" v-model="query" /> -->
    <!-- <input type="submit" value="提交" @click="submit">
    <van-button type="primary">主要按钮</van-button> -->
  </div>
</template>

<script>
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
@import "@/assets/style/minxin.scss";
.search{
  padding: 0 10px;
  margin-bottom: 20px;
  .van-field__control{
    @include caret_color("color-caret");
    @include color("color-search-text");
  }
  .van-field__left-icon .van-icon{
    @include color("color-search-icon");
  }
  .van-search{
    padding: 0;
    @include background_color("color-home-bg");
    transition: background-color 0.3s ease;
  }
  .van-search__content{
    @include background_color("color-search-bg");
    transition: background-color 0.3s ease;
  }
  input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
    @include color("color-search-placeholder");
    transition: background-color 0.3s ease;
  }
}

</style>
