<template>
  <h1>Input 组件示例 </h1>
  <Demo :component="Input1Demo" />
  <Demo :component="Input2Demo" />
  <Demo :component="Input3Demo" />
  <Demo :component="Input4Demo" />
</template>

<script lang="ts">
import Input1Demo from './Input1Demo.vue'
import Input2Demo from './Input2Demo.vue'
import Input3Demo from './Input3Demo.vue'
import Input4Demo from './Input4Demo.vue'
import Demo from '../Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo,
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>