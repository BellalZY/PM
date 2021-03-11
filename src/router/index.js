import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const homePage = () => import('../views/homePage/homePage')
const Login = () => import('../views/login/login')
const Log = () => import('../views/login/log')
const Discuss = () => import('../views/Discuss/Discuss')
const manage = () => import('../views/Management/management')
const personal = () => import('../views/Personal/Personal')
const modify = () => import('../views/login/newCode')
const author = () => import('../views/homePage/author')
const release = () => import('../views/Discuss/release')

const routes = [
  {
    path:'',
    redirect:'/homePage'
  },
  {
    path:'/homePage',
    component: homePage
  },
  {
    path:'/author',
    component: author
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/log',
    component: Log
  },
  {
    path:'/modify',
    component: modify
  },
  {
    path:'/discuss',
    component: Discuss,
    meta:{
      showTab: true
    }
  },
  {
    path:'/management',
    component: manage,
    meta:{
      showTab: true
    }
  },
  {
    path:'/personal',
    component:personal,
    meta:{
      showTab: true
    }
  },
  {
    path:'/discussRelease',
    component:release,
    meta:{
      showTab: true
    }
  }
]

const router = new VueRouter({
    routes,
    mode:"history"
})



export default router
