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
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      index:0
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
  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/views/Tab.vue'),
    meta: {
      index:1
    }
  },
  {
    path: '/totop',
    name: 'totop',
    component: () => import('@/components/ToTop.vue'),
    meta: {
      index:1
    }
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: () => import('@/components/CountDown.vue'),
    meta: {
      index:1
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue'),
    meta: {
      index:0
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
    meta: {
      index:0
    }
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
