import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// 布局
import Index from 'views/index.vue'

// 主页
import Home from 'views/home/home.vue'

// 开源
import Open from 'views/open/index.vue'

// 博客
import Blog from 'views/blog/blog.vue'
import stemNormsSummarize from '../markdown/teamNorms/summarize.vue'
import stemNormsCss from '../markdown/teamNorms/css.vue'
import stemNormsJs from '../markdown/teamNorms/js.vue'

// 生活
import Life from 'views/life/life.vue'

// 摄影
import Photography from 'views/photography/photography.vue'

// 登录
import Login from 'views/login/login.vue'



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect:'/home' 
  },
  {
    path: '/index',
    component: Index,
    children:[
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/open',
        name: 'open',
        component: Open
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

  },      


]

const router = new VueRouter({
  routes
})

export default router
