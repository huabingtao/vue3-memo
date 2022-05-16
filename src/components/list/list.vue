<template>
  <div class="list">
    <div class="list-title" :style="{ color }">{{ title }}</div>
    <div class="list-content">
      <van-checkbox-group v-if="data.length" v-model="checked">
        <van-cell-group inset>
          <transition-group name="list" tag="div">
            <van-cell
              v-for="(item, index) in data"
              :key="item.title"
              class="list-item"
              @click="toggle(index)"
            >
              <template #title>
                <van-checkbox
                  :name="item.title"
                  :ref="(el) => (checkboxRefs[index] = el)"
                  >{{ item.title }}</van-checkbox
                >
              </template>
            </van-cell>
          </transition-group>
        </van-cell-group>
      </van-checkbox-group>
      <van-empty v-else description="暂无事项" />
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

const checked = ref([]);
const checkboxRefs = ref([]);

const emit = defineEmits<{ (e: "onChangeData", data: formDataType[]): void }>();

const toggle = (index) => {

  const cdata = _.cloneDeep(props.data)
  cdata.splice(index,1)
  emit("onChangeData",cdata);
};

watch(props.data,(newData)=>{
  console.log('数据变化',newData);
  list = newData.slice()
})

watch(checked,(newChecked)=>{
  console.log('watch checked',newChecked);
})

</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";
.list {
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
    padding: 15px 44px;
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
}
</style>
