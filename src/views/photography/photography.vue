<template>
  <div class="pubu">
    <div class="box" v-for="(item, index) in imgList" :key="index">
      <img class="image" :data-original="item" :src="item" />
    </div>
  </div>
</template>
<script>

export default {
  name: "",
  components:{
  },
  data() {
    return {

    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">

</style>

