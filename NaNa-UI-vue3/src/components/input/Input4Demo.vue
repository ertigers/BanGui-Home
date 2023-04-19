<demo>
禁用
</demo>

<template>
  <Input v-model:value="value" type="text" :disabled="active" placeholder="哦？不能输入了吧~"/>
  <Input v-model:value="value" type="text" radius="radius" :disabled="active" placeholder="他被禁用了~"/>
  <Input v-model:value="value" type="text" size="big" :disabled="active" placeholder="点击下面的试试~"/>
  <div>
    <Switch v-model:value="active">click</Switch>
  </div>
</template>

<script lang="ts">
import { Input,Switch } from "../../lib/index";
export default {
  components: {
    Input,Switch
  },
  data(){
    return {
      value:'',
      active: false
    }
  }
};
</script>