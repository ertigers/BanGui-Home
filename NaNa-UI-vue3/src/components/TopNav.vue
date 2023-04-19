<template>
  <div class="topnav">
    <router-link to="/" class="logo" :class="topNavVisible ? 'logoVisible' : ''">
      <svg class="icon">
        <use xlink:href="#icon-xigua"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-msnui-menu"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, onUnmounted, ref, Ref, watchEffect } from 'vue'
export default {
  props:{
    toggleAsideButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    let topNavVisible = ref<Boolean>(true)
    const handleScroll = ()=>{
      let scrollTop = document.documentElement.scrollTop || 0
      if(scrollTop <= 0){
        topNavVisible.value = true
      }else if(scrollTop > 0 && topNavVisible.value){
        topNavVisible.value = false
      }
    }
    const toggleMenu = ()=> {
      asideVisible.value = !asideVisible.value
    }
    watchEffect(()=>{
      window.addEventListener("scroll", handleScroll);
    })
    onUnmounted(()=> {
      window.removeEventListener("scroll", handleScroll);
    })
    return { toggleMenu,topNavVisible,handleScroll }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width:500px) {
    >.menu {
      display: none;
    }
    >.logo {
      margin: 0 auto;
      opacity: 0;
      transition: all 0.8s;
    }
    >.logoVisible {
      opacity: 1;
      transition: all 0.8s;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}

</style>