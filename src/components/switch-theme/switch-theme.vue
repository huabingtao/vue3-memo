<template>
  <div class="them">
    <svg @click="toggleThem" class="icon svg-icon" aria-hidden="true">
      <use xlink:href="#icon-moon"></use>
    </svg>
  </div>
</template>

<script>
const themes = {
	light: "light",
	dark: 'dark'
}
export default {
  data() {
    return {
			theme: "light"   
    };
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
  padding: 10px 10px 0 0;
	span{
		font-size: 18px;
		@include font_color("color-home-bg");
	}
}
</style>
