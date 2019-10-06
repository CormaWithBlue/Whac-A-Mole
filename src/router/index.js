import Vue from 'vue'
import Router from 'vue-router'
import FrontCover from '@/components/FrontCover'
import HitMouse from '@/components/HitMouse'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
      path: '/',
      name: 'FrontCover',
      component: FrontCover,
      children: []
    },
    {
      path: '/HitMouse',
      name: 'HitMouse',
      component: HitMouse,
      meta: {
        name: 'HitMouse',
        icon: ""
      }
    }

  ]
})
