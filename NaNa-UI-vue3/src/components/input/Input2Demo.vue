<demo>
类型
</demo>

<template>
  <Input type="password" v-model:value="value" size="small" placeholder="输入的是密码哦~" />
  <Input type="textarea" v-model:value="value" size="big" placeholder="输入的是文本哦~" />
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