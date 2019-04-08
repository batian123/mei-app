import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Default from '@/layout/default'
import BlankPage from '@/layout/blank'
import Index from '@/page/index'
import goodsList from '@/page/goodsList'
import ChangeCity from '@/page/changeCity'

import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: 's/:name',
          name: 'goods',
          component: goodsList
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: ChangeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: BlankPage,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    }
  ],
  mode: 'history'
})
