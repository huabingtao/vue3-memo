<template>
  <div class="btn" :style="{color}" @click="onClick">
    <div class="btn-icon">
      <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
    </div>
    <div class="btn-text" >新建事项</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props:{
    color: String
  },
  emits:['onClick'],
  methods:{
    onClick(){
      this.$emit('onClick')
    }
  }
});
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
	.btn-icon{
		width: 32px;
		height: 32px;
		margin-right: 0.2rem;
	}
	.btn-text{
		flex: 1;
		font-size: 1.2rem;
		display: flex;
	}
}
</style>
