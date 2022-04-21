import pages from "@/pages/index"
import { createRouter, createWebHashHistory } from "vue-router"

type RouteItem = {
  path: string
  component: any
}

const routes: RouteItem[] = [
  { path: "/", component: pages.Home },
  { path: "/home", component: pages.Home },
  { path: "/about", component: pages.About },
  {
    path: "/user/list",
    component: pages.List,
  },
  {
    path: "/user/family",
    component: pages.Family,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
