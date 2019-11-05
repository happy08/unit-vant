import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import http from '@/config/axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      index:0
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      index:1
    }
  },
  {
    path: '/validate',
    name: 'validate',
    component: () => import('@/views/Validate.vue'),
    meta: {
      index:1
    }
  },
  {
    path: '/loaddata',
    name: 'loaddata',
    component: () => import('@/views/LoadData.vue'),
    meta: {
      index:1
    }
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
