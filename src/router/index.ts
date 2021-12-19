import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     name: 'Index',
//     component: () => import('@/components/HelloWorld.vue'), // 注意这里要带上 文件后缀.vue
//   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

