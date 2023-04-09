import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommentList from '../components/CommentList.vue'
import CommentForm from '../components/CommentForm.vue'
import LoginButton from '../components/LoginButton.vue'


const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'CommentList',
    component: CommentList
  },
  {
    path: '/new-comment',
    name: 'CommentForm',
    component: CommentForm
  },
  {
    path: '/login',
    name: 'LoginButton',
    component: LoginButton
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
