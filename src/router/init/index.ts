import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"

declare module 'vue-router' {
    interface RouteMeta {
    }

    interface _RouteRecordBase {
    }
}

export const routes: Array<RouteRecordRaw> = []

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {

    }
})

export default router