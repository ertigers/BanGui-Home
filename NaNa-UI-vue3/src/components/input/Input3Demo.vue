<demo>
圆角
</demo>

<template>
  <Input v-model:value="value" type="text" size="small" radius="radius" placeholder="小尺寸也可以圆角的哦~"/>
  <Input v-model:value="value" type="password" radius="radius" placeholder="默认尺寸也可以圆角的哦~"/>
  <Input v-model:value="value" type="text" size="big" radius="radius" placeholder="大尺寸也可以圆角的哦~"/>
</template>

<script lang="ts">
import { Input } from "../../lib/index";
import { ref } from 'vue';
export default {
  components: {
    Input,
  },
  setup() {
    const value = ref('')
    return { value }
  }
};
</script>