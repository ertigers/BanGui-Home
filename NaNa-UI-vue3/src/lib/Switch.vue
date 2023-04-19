<template>
  <button class="nana-switch" :class="{'nana-checked':value}" @click="toggle"><span></span></button>
</template>

<script>

export default {
  props:{
    value:Boolean
  },
  setup(props,context) {
    const toggle = ()=>{
      context.emit('update:value',!props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
$h:22px;
$h2:$h - 4px;
.nana-switch {
  height: $h;
  width: $h*2;
  background: gray;
  border-radius: 11px;
  border: none;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    border-radius: 9px;
    background: white;
    transition: all 0.6s;
  }
  &.nana-checked {
    background: blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.nana-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}

</style>