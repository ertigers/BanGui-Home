<template>
  <div class="header-wrapper">
    <header>
      <a class="image-wrapper" href="">
        BanGui
      </a>
      <ul class="menu-wrapper">
        <div class="select-option">
          <span>开源</span>
          <img src="../assets/icons/arrow-top.png" alt="">
          <div class="options">
            <li>
              <a
                href="https://ertigers.github.io/nana-ui-website/index.html"
                target="_blank"
                >NaNa-UI库</a
              >
            </li>
            <li>
              <a
                href="https://ertigers.github.io/nana-ui-website/index.html"
                target="_blank"
                >NaNa-UI库2</a
              >
            </li>
            <li>
              <a
                href="https://ertigers.github.io/nana-ui-website/index.html"
                target="_blank"
                >NaNa-UI库3</a
              >
            </li>
          </div>
        </div>
        <li>
          <router-link to="/blog" active-class="selected">博客</router-link>
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
  name: "Header3",
  components: {},
};
</script>

<style scoped lang="scss">
.header-wrapper {
  border: none;
  background-color: #ffffff;
  header {
    min-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    .image-wrapper {
      width: 44px;
      height: 44px;
      line-height: 44px;
      font-size: 30px;
      font-weight: 600;
      /* img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      } */
    }
    ul {
      font-size: 16px;
      color: rgb(0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 100%;
        a {
          display: block;
          padding: 18px 40px;
          cursor: pointer;
        }
        a:hover {
          border-radius: 10px;
          background: rgba($color: #ffcccc, $alpha: 0.5);
        }
        .selected {
          color: #05216a;
        }
      }
    }
    .select-option {
      padding: 18px 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 16px;
        height: 16px;
        margin-left: 10px;
      }
      .options {
        display: none;
        /* visibility: hidden; */
      }
    }
    .select-option:hover {
      position: relative;
      img {
        transform: rotate(180deg)
      }
      .options {
        display: block;
        /* visibility: visible; */
        position: absolute;
        top: 61px;
        left: 0;
        background-color: #fff;
        border-radius: 8px;
      }
    }
  }
}
</style>
