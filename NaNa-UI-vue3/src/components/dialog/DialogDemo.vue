<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Dialog1Demo from '../dialog/Dialog1Demo.vue'
import Dialog2Demo from '../dialog/Dialog2Demo.vue'

export default {
  components:{
    Demo  
  },
  setup() {
    return { Dialog1Demo,Dialog2Demo }
  }
  
}
</script>