<demo>
尺寸
</demo>

<template>
  <Input v-model:value="value" type="text" size="small" placeholder="小尺寸" />
  <Input v-model:value="value" type="text" placeholder="默认尺寸"/>
  <Input v-model:value="value" type="text" size="big" placeholder="大尺寸"/>
</template>

<script lang="ts">
import { Input } from "../../lib/index";
import { ref } from 'vue';
export default {
  components: {
    Input,
  },
  data() {
    return {
      value:''
    }
  }
};
</script>