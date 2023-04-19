<template>
  <div class="container">
    <TopNav />
    <div class="banner">
      <h1>NaNa-UI</h1>
      <h2>一个轻量高效的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/ertigers/wheel-ui-vue3">Github</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <div class="text">
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
          </div>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>         
          <div class="text">
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写（非严格检查）</p>
          </div>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-EASY"></use>
          </svg>        
          <div class="text">
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁,易浏览</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components:{
    TopNav
  }
}
</script>

<style lang="scss" scoped>
$border-radius:4px;

.features {
  margin: 64px auto;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      width: 400px;
      margin: 14px 0;
      padding: 0 20px;
      display: flex;
      align-items: center;
      >.text {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        >h3{
          font-size: 28px;
        }
      }
    }
  }
  svg {
    width: 64px;
    height: 64px;
  }
  @media (min-width:800px) {
    width: 800px;
    >ul {
      justify-content: start;
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width:1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.33%;
      }
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(90deg, rgba(147,191,204,1) 0%, rgba(147,191,204,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #e8f1f3;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
    }
  }
}
</style>