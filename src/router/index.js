import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Generate from '@/components/Generate'
import ApiInterface from '@/components/ApiInterface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate
    },
    {
      path: '/api-interface',
      name: 'api-interface',
      component: ApiInterface
    }
  ]
})
