<demo>
示例1
</demo>

<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" 
          :closeOnClickOverlay="false" 
          :ok="f1" :cancel="f2">
    <template v-slot:title>
      <h1>笨鸟</h1>
    </template>
    <template v-slot:content>
      <h3>znn</h3>
      <h3>是</h3>
      <h3>傻鸟</h3>
      <h3>至少笨鸟还会先飞</h3>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { Button,Dialog } from '../../lib/index'
import { ref } from 'vue';

export default {
  components: {
    Button,
    Dialog
  },  
  setup() {
    const visible = ref(false)
    const closeOnClickOverlay = ref(false)
    const toggle = ()=>{
      visible.value = !visible.value      
    }
    const f1 = ()=>{
      return false
    }
    const f2 = ()=>{
      return false
    }
    return { 
      visible,closeOnClickOverlay,toggle,f1,f2 
    }
  }
}
</script>