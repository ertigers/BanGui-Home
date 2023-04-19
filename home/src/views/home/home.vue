<template>
  <div class="bg">
    <div class="drag">
      <div class="text">
        <p>Hello, I am BanGui</p>
        <p>认真做好每一份细节，用心写好每一段代码</p>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "",
  components: {
  },
};
</script>

<style scoped lang="scss">
/*背景模糊*/
.bg {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("~assets/images/cat.jpg") center no-repeat fixed;
  background-size: 100% 100%;
  padding: 1px;
  box-sizing: border-box;
  z-index: 1;
}
.bg:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(4px);
  z-index: 2;
}
.drag {
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 24px;
    color: #eee;

    p:nth-child(1) {
      font-size: 64px;
      margin-bottom: 20px;
      font-weight: 600;
      background-image: -webkit-linear-gradient(45deg, #ff9e40,#fff ,#28dbff,#05216a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: hue 4s infinite linear;
    }
    @-webkit-keyframes hue {
      from {
        -webkit-filter: hue-rotate(0deg);
      }
      to {
        -webkit-filter: hue-rotate(-360deg);
      }
    }
  }
}
</style>