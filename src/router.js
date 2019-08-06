import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import Ad from '@/components/ads/Ad'
import AdList from '@/components/ads/AdList'
import NewAd from '@/components/ads/NewAd'

import Login from '@/components/auth/Login'
import Registration from '@/components/auth/Registration'

import Orders from '@/components/user/Orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/ad/:id',
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ]
})
