<demo>
示例1
</demo>

<template>
  <Button @click="onClick">你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</template>

<script lang="ts">
import { Button } from '../../lib/index'
export default {
  components: {
    Button,
  },
  setup(){
    const onClick = ()=>{
      console.log("Hi");
    }
    return { onClick }
  }
}
</script>