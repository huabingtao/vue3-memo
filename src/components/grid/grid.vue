<template>
  <van-grid :gutter="10" :column-num="1" clickable class="grid-wrap">
    <van-grid-item v-for="value in gridList" :key="value.icon">
      <div class="grid-item">
        <div class="grid-icon">
          <slot name="icon">
            <div class="grid-icon-content">
              <svg class="icon svg-icon" aria-hidden="true">
                <use :xlink:href="`#${value.icon}`"></use>
              </svg>
            </div>
          </slot>
          <slot name="text">
            <span class="grid-item-title">{{ value.title }}</span>
          </slot>
        </div>
        <div class="grid-count">{{ value.count }}</div>
      </div>
    </van-grid-item>
  </van-grid>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Grid",
  data() {
    return {

    };
  },
  setup() {
    const store = useStore();
    const todolist = computed(() => store.state.todolist);
    const finishlist = computed(() => store.state.finishlist);

    const calcuFavoriteCount = () => {
      const arr1 = todolist.value.filter((item) => item.isFavorite);
      const arr2 = finishlist.value.filter((item) => item.isFavorite);

      return arr1.length + arr2.length;
    };

    const gridList = ref([
      {
        title: "待办",
        icon: "icon-todo",
        count: todolist.value.length,
      },
      {
        title: "已完成",
        icon: "icon-done",
        count: finishlist.value.length,
      },
      {
        title: "全部",
        icon: "icon-all",
        count: todolist.value.length + finishlist.value.length,
      },
      {
        title: "旗标",
        icon: "icon-flag",
        count: calcuFavoriteCount(),
      },
    ]);

    return {
      gridList,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";
.van-grid-item__content {
  padding: 16px 8px;
  @include background_color("color-gird-bg");
}
.grid-wrap {
  --van-border-color: transparent;
  .van-grid-item {
    .grid-icon-content {
      margin-bottom: 14px;
    }
    &:nth-child(1) {
      .grid-icon-content {
        background: #7163e3;
      }
    }
    &:nth-child(2) {
      .grid-icon-content {
        background: #ff4d4d59;
      }
    }
    &:nth-child(3) {
      .grid-icon-content {
        background: #b7994085;
      }
    }
    &:nth-child(4) {
      .grid-icon-content {
        background: #ed9a35;
      }
    }
  }
}
.grid-item {
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;

  .grid-icon {
    flex: 0 1 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .icon {
      font-size: 2.4rem;
    }
    .grid-icon-content {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .grid-item-title {
    @include color("color-text");
  }
  .grid-count {
    flex: 0 1 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: bold;
    @include color("color-count");
  }
}
</style>
