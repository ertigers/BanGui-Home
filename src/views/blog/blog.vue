<template>
  <div class="blog">
    <aside class="blog-aside">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="代码规范" name="1">
          <ol>
            <li>
              <router-link to="/blog/stemNorms/summarize"
                >代码规范总结</router-link
              >
            </li>
            <li>
              <router-link to="/blog/stemNorms/css">css总结</router-link>
            </li>
            <li>
              <router-link to="/blog/stemNorms/js">Js总结</router-link>
            </li>
          </ol>
        </el-collapse-item>
        <el-collapse-item title="项目踩坑" name="2">
          <ol>
            <li>正在开发中~</li>
          </ol>
        </el-collapse-item>
        <el-collapse-item title="JS" name="3">
          <ol>
            <li>正在开发中~</li>
          </ol>
        </el-collapse-item>
        <el-collapse-item title="Vue" name="4">
          <ol>
            <li>正在开发中~</li>
          </ol>
        </el-collapse-item>
        <el-collapse-item title="React" name="5">
          <ol>
            <li>正在开发中~</li>
          </ol>
        </el-collapse-item>
        <el-collapse-item title="Node" name="6">
          <ol>
            <li>正在开发中~</li>
          </ol>
        </el-collapse-item>
        <el-collapse-item title="工具" name="7">
          <ol>
            <li>正在开发中~</li>
          </ol>
        </el-collapse-item>
        <el-collapse-item title="读书" name="8">
          <ol>
            <li>正在开发中~</li>
          </ol>
        </el-collapse-item>
      </el-collapse>
    </aside>
    <main class="blog-main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      activeName: "1",
    };
  },
};
</script>

<style scoped lang="scss">
.blog {
  height: 100%;
  display: flex;
  .blog-aside {
    width: 200px;
    padding: 0 10px;
    ol > li {
      padding: 10px 0;
    }
  }
  .blog-main {
    flex: 1;
    background-color: rgb(250, 211, 211);
  }
}
</style>
