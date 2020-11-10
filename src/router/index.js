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
        meta: { title: 'page1', icon: 'form' }
      }
    ]
  },
  {
    path: '/type',
    component: Layout,
    children: [
      {
        path: 'type',
        name: 'type',
        component: () => import('@/views/type/index'),
        meta: { title: 'page2', icon: 'form' }
      }
    ]
  },
  {
    path: '/origin',
    component: Layout,
    children: [
      {
        path: 'origin',
        name: 'origin',
        component: () => import('@/views/origin/index'),
        meta: { title: 'page3', icon: 'form' }
      }
    ]
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
