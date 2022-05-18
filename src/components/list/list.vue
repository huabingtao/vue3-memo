<template>
  <div class="list">
    <div class="list-title" :style="{ color }">{{ title }}</div>
    <div class="list-content">
      <van-checkbox-group  v-model="checked">
      <transition-group name="list" tag="div">
        <van-swipe-cell v-for="(item, index) in data" :key="item.id" class="list-item">
          <van-cell @click="toggle(index)">
            <template #title >
                <van-checkbox
                  :disabled="item.isFinish"
                  :name="item.id"
                  :ref="(el) => (checkboxRefs[index] = el)"
                  >
                  {{ item.title }}
                  <template #icon="item">
                    <span :class="['checkbox-icon', item.checked ? 'is-active' : '']"></span>
                  </template>
                  </van-checkbox>
              </template>
              <template #right-icon v-if="item.isFavorite">
                <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-flag"></use>
                </svg>
              </template>
          </van-cell>
          <template #right>
            <van-button @click="goDetail(item)" class="btn btn-detail" square type="primary" text="详细信息" />
            <van-button @click="toggleFavorite(index)" class="btn btn-favorite" square type="primary" :text="item.isFavorite ? '取消旗标' : '旗标' " />
            <van-button @click="onClickDelete(item)" class="btn btn-delete" square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
      </transition-group>
      </van-checkbox-group>
      <van-empty v-if="!data.length" description="暂无事项" />
    </div>
  </div>
</template>

<script setup lang="ts">

import _ from "lodash";
import { formDataType } from "@/views/createView/use-create";
import {
  ref,
} from "@vue/runtime-core";

const props = defineProps<{
  data: formDataType[];
  title: string;
  color: string;
}>();

console.log(
  props.data.map((item) => item.isFinish)
);

const checked = ref(
  props.data.map((item) => {
    return item.isFinish && item.id;
  })
);

const checkboxRefs = ref([]);

const emit = defineEmits<{ (e: "onChangeData", data: formDataType[]): void,(e: "onViewDetail", data: formDataType): void }>();

const toggle = (index) => {
  // checkboxRefs.value[index].toggle();
  const cdata = _.cloneDeep(props.data);
  cdata[index].isFinish = !(cdata[index].isFinish);
  emit("onChangeData", cdata, cdata[index], index);
};

const goDetail = (item) => {
  emit("onViewDetail",item)
}

const toggleFavorite = (index) => {

  const cdata = _.cloneDeep(props.data);
  cdata[index].isFavorite = !cdata[index].isFavorite;
  emit("onChangeData", cdata);
}

</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";
.list {
  .svg-icon{
    width: 1.3rem;
    height: 1.3rem;
  }
  .van-cell__title {
    display: flex;
    align-items: center;
  }
  .van-cell:after{
    right:0;
  }
  .van-cell-group,
  .van-cell {
    @include background_color("color-list-bg");
  }
  .van-cell-group--inset {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
  }
  .van-checkbox__label {
    @include color("color-create-text");
  }
  .list-content {
    height: calc(100vh - 100px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .list-title {
    font-size: 1.3rem;
    padding: 10px 10px;
  }
  .van-empty {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .van-cell {
    padding: 15px;
  }
  .list-checkbox {
    margin-left: -28px;
  }
  .list-item {
    transition: all 0.8s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .checkbox-icon {
    width: 20px;
    height: 20px;
    background: transparent;
    border: 1px solid;
    @include border_color("color-checkbox-border");
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    &.is-active {
      background: #e08d48;
    }
  }
  .btn{
    height: 100%;
    box-sizing: border-box;
    border: none;
    top: -1px;
    &.btn-detail{
      @include background_color("color-btn-detail")
    }
    &.btn-favorite{
      @include background_color("color-btn-favorite")
    }
    &.btn-delete{
      @include background_color("color-btn-delete")
    }
  }
}
</style>
