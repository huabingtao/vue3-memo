<template>
  <div class="them">
    <svg @click="toggleThem" class="icon svg-icon" aria-hidden="true">
      <use v-show="theme === 'light'" xlink:href="#icon-sun"></use>
      <use v-show="theme === 'dark'" xlink:href="#icon-moon"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
			theme: "light"
    };
  },
  created(){
    this.toggleThem()
  },
	methods:{
		toggleThem(){
			if(this.theme === 'light') {
				this.theme = 'dark'
				window.document.documentElement.setAttribute( "data-theme", this.theme );
			}else{
				this.theme = 'light'
				window.document.documentElement.setAttribute( "data-theme", this.theme );
			}
		}
	}
};
</script>

<style lang="scss">
@import "@/assets/style/minxin.scss";
.them {
  text-align: right;
  margin: 10px 10px 10px 0;
  .icon{
        width: 2rem;
    height: 2rem;
  }
}
</style>
