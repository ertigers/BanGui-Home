<demo>
示例1
</demo>

<template>
  <Tabs v-model:selected="selectedTab">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs,Tab } from '../../lib/index'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,Tab
  },  
  setup() {
    const selectedTab = ref('导航2')
    return {
      selectedTab
    }
  }
}
</script>