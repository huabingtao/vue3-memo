<template>
  <van-popup
    v-model:show="visible"
    round
    position="bottom"
    teleport="#app"
    :style="{ height: '90%' }"
  >
    <div class="create">
      <div class="create-head">
        <div class="cancel" @click="toggleCreateModal">取消</div>
        <div class="title">{{title}}</div>
        <div class="add" :class="submitBtnClass" @click="onSubmit">{{rightBtnText}}</div>
      </div>
      <div class="create-field">
        <van-cell-group inset>
          <van-field class="create-input" v-model.trim="formData.title" placeholder="标题" />
          <van-field
            class="create-input"
            v-model.trim="formData.description"
            rows="5"
            autosize
            type="textarea"
            placeholder="备注"
            show-word-limit
          />
        </van-cell-group>
      </div>
      <div class="create-favorite">
        <van-cell-group inset>
          <van-cell center title="旗标">
            <template #icon>
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-flag"></use>
              </svg>
            </template>
            <template #right-icon>
              <van-switch v-model="formData.isFavorite" size="24" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </van-popup>
</template>

<script>
import { ref, watch } from "vue";
import useCreate from './use-create'
export default {
  props:{
    data:{
      type: Object
    },
    title:{
      type: String,
      default: "新建事项"
    },
    rightBtnText:{
      type: String,
      default: "添加"
    }
  },
  setup(props) {
    const visible = ref(false);

    const toggleCreateModal = () => {
      visible.value = !visible.value;
    };

    const show = () => {
      visible.value = true;
    };

    const hidden = () => {
      visible.value = false;
    };

    watch(
      props,
      (newProps) => {
        createData(newProps.data)
      }
    );

    const {formData, submitBtnClass, onSubmit, createData} = useCreate(hidden)

    // defineExpose({visible,show,hidden,toggleCreateModal})
    return {
      formData,
      visible,
      show,
      hidden,
      toggleCreateModal,
      submitBtnClass,
      onSubmit
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";
.create {
  height: 100%;
  @include background_color("color-create-bg");
  transition: background-color 0.3s ease;
  padding: 0 20px;
  .create-field {
    margin-bottom: 1.2rem;
  }
  .create-favorite {
    .van-cell {
      @include color("color-search-placeholder");
    }
  }
  .create-input {
    .van-field__control {
      @include caret_color("color-caret");
      @include color("color-search-text");
    }
    input::placeholder {
      @include color("color-search-placeholder");
    }
    textarea::placeholder {
      @include color("color-search-placeholder");
    }
  }

  .create-head {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cancel {
      @include color("color-blue");
      font-size: 1.1rem;
    }
    .title {
      @include color("color-create-text");
      font-size: 1.2rem;
    }
    .add {
      @include color("color-create-text-d");
      font-size: 1.1rem;
      &.is-active{
        @include color("color-blue");
      }
    }
  }
  .van-cell-group--inset {
    margin: 0;
    @include background_color("color-create-input-bg");
    transition: background-color 0.3s ease;
  }
  .van-cell {
    &::after {
      @include border_color("color-create-line");
    }
    @include background_color("color-create-input-bg");
    transition: background-color 0.3s ease;
  }
}
.van-popup {
  background: transparent;
}
</style>
