<template>
  <div class="list">
    <div class="list-title" :style="{ color }">{{ title }}</div>
    <div class="list-content">
      <van-checkbox-group  v-model="checked">
        <van-cell-group inset>
          <transition-group name="list" tag="div">
            <van-cell
              v-for="(item, index) in data"
              :key="item.id"
              class="list-item"
              @click="toggle(index)"
            >
              <template #title>
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
          </transition-group>
        </van-cell-group>
      </van-checkbox-group>
      <van-empty v-if="!data.length" description="暂无事项" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { key } from "@/store";
import _ from 'lodash'
import { formDataType } from "@/views/createView/use-create";
import {
  computed,
  onBeforeUpdate,
  onUpdated,
  ref,
  watch,
} from "@vue/runtime-core";

const props = defineProps<{
  data: formDataType[];
  title: string;
  color: string;
}>();
console.log('props.data:',props.data.map(item=> item.isFinish));

const checked = ref(props.data.map(item=>{
  return item.isFinish && item.id
}));

const checkboxRefs = ref([]);

const emit = defineEmits<{ (e: "onChangeData", data: formDataType[]): void }>();

const toggle = (index) => {
  // checkboxRefs.value[index].toggle();
  const cdata = _.cloneDeep(props.data)
  cdata[index].isFinish = true
  emit("onChangeData",cdata);
};

watch(props.data,(newData)=>{
  console.log('watch props.data');
},{deep:true})

</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";
.list {

  .van-cell__title{
    display: flex;
    align-items: center
  }
  .van-cell-group,
  .van-cell {
    @include background_color("color-list-bg");
  }
  .van-cell-group--inset {
    overflow-y: scroll;
    height: 100%;
  }
  .van-checkbox__label {
    @include color("color-create-text");
  }
  .list-content {
    height: calc(100vh - 100px);
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
    padding: 15px 10px;
  }
  .list-checkbox {
    margin-left: -28px;
  }
  .list-item {
    transition: all 0.8s ease ;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .checkbox-icon{
    width: 20px;
    height: 20px;
    background: transparent;
    border: 1px solid ;
    @include border_color("color-checkbox-border");
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    &.is-active{
      background: #e08d48;
    }
  }
}
</style>
