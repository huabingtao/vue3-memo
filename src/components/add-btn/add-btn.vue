<template>
  <div class="btn">
    <div class="btn-icon">
      <svg class="icon svg-icon" aria-hidden="true">
        <use xlink:href="#icon-add"></use>
      </svg>
    </div>
    <div class="btn-text">新建事项</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  left: 10px;
  bottom: 30px;
  height: 32px;
	display: flex;
	align-items: center;
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
