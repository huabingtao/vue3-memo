<template>
  <div class="them">
    <svg class="icon svg-icon" aria-hidden="true">
      <use xlink:href="#icon-moon"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style lang="scss">
.them {
  text-align: right;
  padding: 10px 10px 0 0;
}
</style>
