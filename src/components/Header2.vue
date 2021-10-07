<template>
  <div class="header-wrapper">
    <header>
      <a class="image-wrapper" href="">BanGui</a>
      <div class="menu-wrapper">
        <router-link to="/blog" active-class="selected"><span>开</span><span>源</span></router-link>
        <router-link to="/blog" active-class="selected"><span>博</span><span>客</span></router-link>
        <router-link to="/life" active-class="selected"><span>生</span><span>活</span></router-link>
        <router-link to="/photography" active-class="selected"><span>摄</span><span>影</span></router-link>
      </div>
    </header>
  </div>
</template>

<script >
export default {
  name: "Header2",
};
</script>

<style scoped lang="scss">
.header-wrapper {
  height: 62px;
  border: none;
  background-color: rgb(0, 88, 129);

  /* border: 1px solid gray; */
  header {
    height: 62px;
    min-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    .image-wrapper {
      height: 44px;
      line-height: 44px;
      font-size: 30px;
      font-weight: 600;
      color: white;
    }
    .menu-wrapper {
      a {
        display: inline-block;
        width: 100px;
        padding: 20px 0;
        color: white;
        font-weight: 600;
        span:nth-child(1){
          margin-right: 2px;
          transition: all 0.5s ease-in-out;
        }
      }
      a:hover {
        border-bottom: 2px orange solid;
        span:nth-child(1) {
          color: red;
          margin-right: 20px;
          transition: all 0.5s ease-in-out;
        }
      }
      .selected {
        border-bottom: 2px orange solid;
        span:nth-child(1) {
          color: red;
          margin-right: 20px;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
}
</style>
