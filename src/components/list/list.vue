<template>
  <div class="list">
    <van-cell-group>
      <van-cell v-for="item in data" :key="item.title">
        <template #title>
          <van-checkbox class="list-checkbox">{{ item.title }}</van-checkbox>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { formDataType } from "@/views/createView/use-create";


defineProps<{
  data: formDataType[]
}>()

</script>

<style lang='scss'>

.list{

  .van-cell{
    padding: 15px 56px;
  }
  .list-checkbox{
    margin-left: -28px;
  }
}

</style>
