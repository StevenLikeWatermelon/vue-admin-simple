import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/components/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/attr',
    component: Layout,
    children: [
      {
        path: 'attr',
        name: 'attr',
        component: () => import('@/views/attr/index'),
        meta: { title: '动态轨迹', icon: 'form' }
      }
    ]
  },
  {
    path: '/demo1',
    name: 'demo1',
    hidden: true,
    component: () => import('@/views/type/index')
  },
  {
    path: '/demo2',
    name: 'demo2',
    hidden: true,
    component: () => import('@/views/origin/index')
  },
  {
    path: '/demo3',
    name: 'demo3',
    hidden: true,
    component: () => import('@/views/review/index')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue')
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router
