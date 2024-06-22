import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home.vue')
        },
        {
          path: 'template/:id',
          name: 'template',
          component: () => import('../views/TemplateDetail.vue')
        }
      ]
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('../views/Editor.vue')
    }
  ]
})

export default router
