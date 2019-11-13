import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      index: 0,

    }
  },
  {
    path: '/validate',
    name: 'validate',
    component: () => import('@/views/Validate.vue'),
    meta: {
      index: 1

    }
  },
  {
    path: '/loaddata',
    name: 'loaddata',
    component: () => import('@/views/LoadData.vue'),
    meta: {
      index: 1

    }
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/views/Tab.vue'),
    meta: {
      index: 1

    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
    meta: {
      index: 1

    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  //   meta: {
  //     index: 1
  //   }
  // },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue'),
    meta: {
      index: 0
    },
    children: [
      {
        path: '/user/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
          index: 1
        }
      }
    ]
  },
]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   console.log('savedPosition', savedPosition);
  //   if (savedPosition) {
  //     console.log('w');
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       console.log('e', from.meta.keepAlive, document.body.scrollTop);
  //       from.meta.savedPosition = document.body.scrollTop;
  //     }
  //     console.log('to.meta.savedPosition', to.meta.savedPosition);
  //     return { x: 0, y: 300 }
  //   }
  // }
})


router.beforeEach((to, from, next) => {
  //切换路由，取消上个页面所有请求
  window.__axiosPromiseArr.forEach((ele, index) => {
    ele.cancel()
    window.__axiosPromiseArr.shift()
  })
  next()
})


export default router
