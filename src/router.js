import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import mainHome from './components/main-home.vue'
import mainGuestbook from './components/main-guestbook.vue'
import mainCategory from './components/main-category.vue'
import mainArchive from './components/main-archive.vue'
import mainDetail from './components/main-detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          name: 'main-home',
          path: '/',
          component: mainHome
        },
        {
          name: 'main-guestbook',
          path: '/main-guestbook',
          component: mainGuestbook
        },
        {
          name: 'main-category',
          path: '/main-category',
          component: mainCategory
        },
        {
          name: 'main-archive',
          path: '/main-archive',
          component: mainArchive
        },
        {
          name: 'main-detail',
          path: '/main-detail/:id',
          component: mainDetail
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
