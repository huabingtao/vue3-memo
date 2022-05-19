<template>
  <div class="list">
    <div class="list-title" :style="{ color }">{{ title }}</div>
    <div class="list-content">
      <van-checkbox-group>
        <transition-group name="list" tag="div">
          <van-swipe-cell
            v-for="(item, index) in data"
            :key="item.id"
            class="list-item"
          >
            <van-cell @click="toggle(item,index)">
              <template #title>
                <!-- <van-checkbox
                  :disabled="item.isFinish"
                  :name="item.id"
                  :ref="(el) => (checkboxRefs[index] = el)"
                  >
                  {{ item.title }}
                  <template #icon="item">

                  </template>
                  </van-checkbox> -->
                <div class="check-box">
                  <span
                    :class="['checkbox-icon', item.isFinish ? 'is-active' : '']"
                  ></span>
                  <span>{{ item.title }}</span>
                </div>
              </template>
              <template #right-icon v-if="item.isFavorite">
                <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-flag"></use>
                </svg>
              </template>
            </van-cell>
            <template #right>
              <van-button
                @click="goDetail(item)"
                class="btn btn-detail"
                square
                type="primary"
                text="详细信息"
              />
              <van-button
                @click="toggleFavorite(item.id)"
                class="btn btn-favorite"
                square
                type="primary"
                :text="item.isFavorite ? '取消旗标' : '旗标'"
              />
              <van-button
                @click="deleteMatter(item.id)"
                class="btn btn-delete"
                square
                type="danger"
                text="删除"
              />
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
import { ref } from "@vue/runtime-core";

const props = defineProps<{
  data: formDataType[];
  title: string;
  color: string;
}>();

const checkboxRefs = ref([]);

const emit = defineEmits<{
  (e: "onToggleFinish", item: formDataType, index: number): void;
  (e: "onViewDetail", data: formDataType): void;
  (e: "onToggleFavorite", id: number): void;
  (e: "onDeleteMatter", id: number): void;
}>();

const toggle = (item,index) => {
  emit("onToggleFinish", item , index);
};

const goDetail = (item) => {
  emit("onViewDetail", item);
};

const toggleFavorite = (id) => {
  emit("onToggleFavorite", id);
};

const deleteMatter = (id) => {
  emit("onDeleteMatter", id);
}
</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";
.list {
  .check-box {
    display: flex;
    align-items: center;
    @include color("color-count");
    .checkbox-icon {
      margin-right: 10px;
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
  }
  .svg-icon {
    width: 1.3rem;
    height: 1.3rem;
  }
  .van-cell__title {
    display: flex;
    align-items: center;
  }
  .van-cell:after {
    right: 0;
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

  .btn {
    height: 100%;
    box-sizing: border-box;
    border: none;
    top: -1px;
    &.btn-detail {
      @include background_color("color-btn-detail");
    }
    &.btn-favorite {
      @include background_color("color-btn-favorite");
    }
    &.btn-delete {
      @include background_color("color-btn-delete");
    }
  }
}
</style>
