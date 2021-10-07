<template>
  <div class="life">
    <waterfall :col='3' :data="imgArr" >
        <img v-for="(item,index) in imgArr" :key="index" :src="item" alt="加载错误" />
    </waterfall>
  </div>
</template>

<script>

export default {
  name: "",
  components: {
  },
  data() {
    return {
      imgArr: [
        require("../assets/images/安室透.jpeg"),
        require("../assets/images/贝尔摩德.jpg"),
        require("../assets/images/博士.jpg"),
        require("../assets/images/步美.jpg"),
        require("../assets/images/赤井秀一.jpg"),
        require("../assets/images/妃英理.jpg"),
        require("../assets/images/服部平次.jpg"),
        require("../assets/images/工藤有希子.jpg"),
        require("../assets/images/怪盗基德.jpg"),
        require("../assets/images/灰原哀.jpg"),
        require("../assets/images/基安蒂.jpg"),
        require("../assets/images/柯南.jpg"),
        require("../assets/images/兰.jpg"),
        require("../assets/images/铃木园子.jpg"),
        require("../assets/images/毛利小五郎.jpg"),
        require("../assets/images/目暮十三.jpg"),
        require("../assets/images/远山和叶.jpg"),
        require("../assets/images/佐藤美和子.jpg"),
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.life {
  width: 60%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>