<template>
  <div class="home">
    <Header :class="headerVisible ? 'headerOn' : 'headerOff'" />
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="js">
import Header from "@/components/Header2.vue";

export default {
  name: "",
  components: {
    Header,
  },
  data() {
    return {
      headerVisible: true,
      scrollTop: 0,
    };
  },
  watch:{
		scrollTop(newValue,oldValue){
			// 等新值大于100的时候再做变化（优化一下）
			if(newValue > 100){
				if(newValue > oldValue){
					this.headerVisible = false
				}else{
					this.headerVisible = true
				}
			}
		}
  },
  mounted() {
    this.$nextTick(function () {
        window.addEventListener('scroll', () => {
          this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      })
    });
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.headerOn {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s ease-in-out 0.2s;
  transform: translateZ(0);
  z-index: 1000;
}
.headerOff {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s ease-in-out 0.2s;
  transform: translate3d(0, -100%, 0);
  z-index: 1000;

}
.wrapper {
  flex: 1;
  padding-top: 62px;
}
</style>