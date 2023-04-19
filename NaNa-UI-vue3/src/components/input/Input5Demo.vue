<demo>
可清除（还在开发中~）
</demo>

<template>
  <Input v-model:value="value" type="text" :disabled="active" />
  <Input v-model:value="value" type="text" radius="radius" :disabled="active" />
  <Input v-model:value="value" type="text" size="big" :disabled="active" />
</template>

<script lang="ts">
import { Input } from "../../lib/index";
export default {
  components: {
    Input,
  },
  data(){
    return {
      value:'',
      active: false
    }
  }
};
</script>