<template>
  <div class="btn" :style="{ color }" @click="onClick">
    <div class="btn-icon" v-if="status === '3'">
      <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-add-flag"></use>
      </svg>
    </div>
    <div class="btn-icon" v-else>
      <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
    </div>
    <div class="btn-text">新建事项</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps<{
  color: string;
}>();

const route = useRoute();

const emit = defineEmits<{
  (e: "onClick", item: formDataType, index: number): void;
}>();

const onClick = () => {
  emit("onClick");
};

const status = route?.query?.status || "0";
</script>

<style lang="scss" scoped>
@import "@/assets/style/minxin.scss";
.btn {
  position: absolute;
  left: 10px;
  bottom: 30px;
  height: 32px;
  display: flex;
  align-items: center;
  /* @include color("color-blue"); */
  .btn-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.2rem;
    display: flex;
    align-items: center;
  }
  .btn-text {
    flex: 1;
    font-size: 1.2rem;
    display: flex;
  }
}
</style>
