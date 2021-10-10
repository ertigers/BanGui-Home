<template>
  <div class="home-life">
    <div
      class="panel active"
      style="
        background-image: url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
      "
    >
      <h3>Explore The World</h3>
    </div>
    <div
      class="panel"
      style="
        background-image: url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
      "
    >
      <h3>Wild Forest</h3>
    </div>
    <div
      class="panel"
      style="
        background-image: url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80);
      "
    >
      <h3>Sunny Beach</h3>
    </div>
    <div
      class="panel"
      style="
        background-image: url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80);
      "
    >
      <h3>City on Winter</h3>
    </div>
    <div
      class="panel"
      style="
        background-image: url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
      "
    >
      <h3>Mountains - Clouds</h3>
    </div>
  </div>
</template>

<script lang="js">
import { showStory } from "../../utils/showStory.js";

export default {
  name: "Life",
  components: {
    
  },
  mounted() {
    showStory();
  },
};
</script>

<style lang="scss" scoped>
.home-life {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  flex: 1;
  margin: 10px;
  position: relative;
  transition: all 700ms ease-in 0s;
  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    opacity: 0;
  }
}

.panel.active {
  flex: 8;
}
.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>