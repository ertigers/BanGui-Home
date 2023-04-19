<template>
  <div class="header-wrapper">
    <header>
      <router-link to="/home" class="image-wrapper">BanGui</router-link>
      <div class="menu-wrapper">
        <router-link to="/open" active-class="selected"><span>开</span><span>源</span></router-link>
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
      transition: all 0.5s ease-in-out;

    }
    .image-wrapper:hover {
      color: #FF981A;
      font-size: 34px;
      transition: all 0.5s ease-in;
    }
    .menu-wrapper {
      a {
        display: inline-block;
        width: 100px;
        padding: 19px 0;
        color: white;
        font-weight: 600;
        border-bottom: 2px transparent solid;
        span:nth-child(1){
          margin-right: 2px;
          transition: all 0.5s ease-in-out;
        }
      }
      a:hover {
        border-bottom: 2px #FF981A solid;
        span:nth-child(1) {
          color: #FF981A;
          margin-right: 20px;
          transition: all 0.5s ease-in-out;
        }
      }
      .selected {
        border-bottom: 2px #FF981A solid;
        span:nth-child(1) {
          color: #FF981A;
          margin-right: 20px;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
}
</style>
