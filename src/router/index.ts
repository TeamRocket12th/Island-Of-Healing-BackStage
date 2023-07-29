import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '小島聊癒所-後台'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashBoard.vue'),
    meta: {
      title: '管理者頁面',
      requiresAuth: true
    },
    children: [
      {
        path: 'reviewarticles',
        component: () => import('../components/ArticleList.vue')
      },
      {
        path: 'selectarticles',
        component: () => import('../components/ArticleList.vue')
      },
      {
        path: 'manageusers',
        component: () => import('../components/ＭanageUsers.vue')
      },
      {
        path: 'hotword',
        component: () => import('../components/HotWord.vue')
      },
      {
        path: 'feecalculate',
        component: () => import('../components/FeeCalculate.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (!token) {
      return { name: 'home' }
    }
  }
})

export default router
