<template>
  <input class="nana-input"
    :value="value"
    @input="onValueChanged($event.target.value)"
    :class="classes"
    :type="type" 
    :disabled="disabled"
    :placeholder="placeholder"
    >
</template>

<script>
import { computed } from 'vue';
export default {
  props: {
    value:{
      type: String
    },
    size: {
      type: String,
      default: "normal",
    },
    radius: {
      type: String,
      default: "normal",
    },
    type: {
      type: String,
      default: "text",
    },
    clearable: {
      type: String,
      default:"noClearable",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "请输入~",
    }
  },
  setup(props,context) {
    const { size, radius,clearable } = props;
    const classes = computed(() => {
      return {
        [`nana-input-size-${size}`]: size,
        [`nana-input-radius-${radius}`]: radius,
        [`nana-input-${clearable}`]: clearable
      };
    });
    const onValueChanged = (value)=>{
      context.emit('update:value', value)
    }
    return { classes,onValueChanged };
  },
}
</script>

<style lang="scss">
$grey: rgb(196, 196, 196);
.nana-input {
  border: 1px solid  $grey;
  padding: 10px 6px;
  border-radius: 4px;
  & + & {
    margin-left: 14px;
  }
  &:hover,
  &:focus {
    color: rgb(0, 0, 0);
    border-color: rgb(50, 171, 211);
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.nana-input-size-small {
    padding: 8px 4px;
  }
  &.nana-input-size-big {
    padding: 14px 8px;
  }
  &.nana-input-radius-radius {
    border-radius: 20px;
  }
}

</style>










