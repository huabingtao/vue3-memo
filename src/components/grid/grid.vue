<template>
  <van-grid :gutter="10" :column-num="1" clickable >
    <van-grid-item v-for="value in girdList" :key="value.icon">
      <div class="grid-item">
        <div class="grid-icon">
          <slot name="icon">
            <svg class="icon svg-icon" aria-hidden="true">
              <use :xlink:href="`#${value.icon}`"></use>
            </svg>
          </slot>
          <slot name="text">
            {{ value.title }}
          </slot>
        </div>
        <div class="grid-count">{{ value.count }}</div>
      </div>
    </van-grid-item>
  </van-grid>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Grid',
  data() {
    return {
      girdList: [
        {
          title: '待办',
          icon: 'icon-todo',
					count: 9
        },
        {
          title: '已完成',
          icon: 'icon-done',
					count: 388
        },
        {
          title: '全部',
          icon: 'icon-all',
					count: 2883
        },
        {
          title: '旗标',
          icon: 'icon-flag',
					count: 39
        },
      ],
    };
  },
  setup() {},
};
</script>

<style lang="scss">
.grid-item{
	flex: 1;
	display: flex;
	width: 100%;
	height: 100%;
	.grid-icon{
		flex: 0 1 50%;
		display: flex;
		align-items: center;
		flex-direction: column;
		.icon{
			font-size: 2.4rem;
		}
	}
	.grid-count{
		flex: 0 1 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.4rem;
	}
}

</style>
