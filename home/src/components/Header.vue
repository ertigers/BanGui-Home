<template>
  <div class="header-wrapper">
    <header>
      <a class="image-wrapper" href="">
        <img src="../assets/logocat.jpg" alt="" />
      </a>
      <ul>
        <!-- <li>
          <a
            href="https://ertigers.github.io/nana-ui-website/index.html"
            target="_blank"
            >NaNa-UI库</a
          >
        </li> -->
        <li>
          <router-link to="/blog" active-class="selected">技术博客</router-link>
        </li>
        <li>
          <router-link to="/life" active-class="selected">生活</router-link>
        </li>
        <li>
          <router-link to="/photography" active-class="selected">摄影</router-link>
        </li>
        <li>
          <router-link to="/login" active-class="selected">登录</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header1",
  components: {},
};
</script>

<style scoped lang="scss">
.header-wrapper {
  border: none;
  background-color: #28dbff;
  header {
    min-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    .image-wrapper {
      width: 44px;
      height: 44px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    ul {
      font-size: 20px;
      color: rgb(255, 255, 255);
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 100%;
        a {
          display: block;
          padding: 18px 40px;
          font-size: 20px;
          cursor: pointer;
        }
        a:hover {
          border-radius: 10px;
          background: rgba($color: #ffffff, $alpha: 0.5);
        }
        .selected {
          color: #05216a;
        }
      }
    }
  }
}
</style>
