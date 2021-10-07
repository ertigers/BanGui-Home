<template>
<Layout>
  <div class="pubu">
    <div class="box" v-for="(item, index) in imgList" :key="index">
      <img class="image" :data-original="item" :src="item" />
    </div>
  </div>
</Layout>
</template>
<script>
import imgFall from "../utils/imgFall";
import Layout from '@/components/Layout.vue'

export default {
  name: "",
  components:{
    Layout
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
  computed: {
    imgList() {
      let arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push(this.imgArr[Math.round(Math.random() * 18)]);
      }
      return arr;
    },
  },
  mounted() {
    imgFall();
    // this.$nextTick(()=>{
    //   window.scroll({
    //     top: 100,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
    // })
    setTimeout(() => {
      window.scroll({
        top: 10,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.pubu {
  position: absolute;
  width: 1100px;
  left: 50%;
  margin-left: -550px;
  margin-top: 10px;
}

.box {
  padding: 20px 0 0 20px;
  float: left;
}

.box img {
  width: 200px;
  // max-height:100%;
  min-height: 100px;
  opacity: 0;
}
</style>

