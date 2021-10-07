import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// header的路由
import Home from '../views/Home.vue'
import Blog from '../views/blog.vue'
import Life from '../views/life.vue'
import Photography from '../views/photography.vue'
import Login from '../views/login.vue'

// 技术博客
import stemNormsSummarize from '../markdown/teamNorms/summarize.vue'
import stemNormsCss from '../markdown/teamNorms/css.vue'
import stemNormsJs from '../markdown/teamNorms/js.vue'

// 暂时放弃MarkDown的批量引入
// import Markdown from "../markdown/Markdown.vue";
// import Instr from '../markdown/instro/instro.md'

// const md = (string: any) => Vue.h(Markdown, { content: string, key: string });


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect:'/home' 
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },      
  {
    path: '/blog',
    component:Blog ,
    children:[
      {
        path:'',
        redirect:'stemNorms/summarize' 
      },
      // 代码规范
      {
        path:'stemNorms/summarize',
        component: stemNormsSummarize
      },
      {
        path:'stemNorms/css',
        component: stemNormsCss
      },
      {
        path:'stemNorms/js',
        component: stemNormsJs
      }
      // 项目踩坑
      // JS
      // Vue
      // React
      // Node
      // 工具
      // 读书
    ]
  },
  {
    path: '/life',
    name: 'life',
    component: Life
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

]

const router = new VueRouter({
  routes
})

export default router
