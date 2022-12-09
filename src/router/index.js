import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from "@/views/Details";
import Create from "@/views/Create";
import Tag from '@/views/Tag'
import RealTime from "@/views/RealTime";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'Tags',
    component: Tag,
    props: true
  },

  {
    path: '/create',
    name: 'Create',
    component: Create,
    props: true
  },

  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
