import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: () => import('@/main/main.vue')
        },
        {
            path: "/main_osob",
            component: () => import('@/main/main_osob.vue')
        },
        {
            path: "/main_pent",
            component: () => import('@/main/main_pent.vue')
        },
        {
            path: "/main_vubkv",
            component: () => import('@/main/main_vubkv.vue')
        }
    ]
})