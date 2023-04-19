<template>
  <div class="photo">
    <div class="text">【暂未开放，尽情期待~】</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.photo {
  height: 100%;
  background-color: rgb(46, 103, 117);
  color: #fff;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 24px;
  }
}
</style>

