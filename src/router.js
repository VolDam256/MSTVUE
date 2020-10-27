import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: () => import('@/pages/main.vue')
        },
        {
            path: "/main_osob",
            component: () => import('@/pages/main_osob.vue')
        },
        {
            path: "/main_pent",
            component: () => import('@/pages/main_pent.vue')
        },
        {
            path: "/main_vubkv",
            component: () => import('@/pages/main_vubkv.vue')
        }
    ]
})