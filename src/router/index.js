import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Generate from '@/components/Generate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/generate',
      name: 'Generate',
      component: Generate
    }
  ]
})
