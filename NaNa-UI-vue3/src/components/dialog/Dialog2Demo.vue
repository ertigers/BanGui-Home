<demo>
示例2
</demo>

<template>
  <Button @click="showDialog">openDialog</Button>
</template>

<script lang="ts">
import { h } from 'vue'
import { Button, openDialog } from '../../lib/index'
export default {
  components: {
    Button,
  },
  setup(){
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
          return false
        },
        cancel() {
          console.log('cancel')
          return false
        },
        closeOnClickOverlay: false
      })
    }
    return { showDialog }
  }
}
</script>