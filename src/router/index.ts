import { createRouter, createWebHistory } from "vue-router";
import { routes } from './routes'
//创建一个router的变量
const router = createRouter({
    history: createWebHistory(),
    routes
})
//导出一个默认的router
export default router