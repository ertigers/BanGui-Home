<template>
  <div class="home">
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script lang="js">
import Header from "@/components/Header2.vue";

export default {
  name: "",
  components: {
    Header,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.wrapper {
  flex: 1;
}
</style>