<template>
  <div class="layout">
    <TopNav :toggleAsideButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
import { inject, Ref } from 'vue';
export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return { asideVisible }
  }
}
</script>

<style lang="scss" scoped>

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
    > aside {
      flex-shrink: 0;
      z-index: 10;
      background: lightblue;
      width: 150px;
      padding: 16px 0;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
      height: 100%;
      > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }
      > ol {
        > li {
          > a {
            display: block;
            padding: 4px 16px;
            text-decoration: none;
          }
          .router-link-active {
            background: white;
          }
        }
      }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      overflow: auto;
    }
  }
}
</style>