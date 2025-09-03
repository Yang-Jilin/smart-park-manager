import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/subviews/Dashboard.vue'),
        },
        {
          path: '/park',
          name: 'park',
          component: () => import('@/views/subviews/Park.vue'),
        },
        {
          path: '/building',
          name: 'building',
          component: () => import('@/views/subviews/Building.vue'),
        },
        {
          path: '/floor',
          name: 'floor',
          component: () => import('@/views/subviews/Floor.vue'),
        },
        {
          path: '/room',
          name: 'room',
          component: () => import('@/views/subviews/Room.vue'),
        },
        // {
        //   path: '/parking',
        //   name: 'parking',
        //   component: () => import('@/views/subviews/Parking.vue'),
        // },
      ]
    },
  ],
})

export default router
