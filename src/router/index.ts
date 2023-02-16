import "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    showHowTo: boolean;
    requireLogin: boolean;
    level: number;
    isKeepAlive: boolean;
    pageName: string;
  }
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/HomeView.vue"),
      meta: {
        showHowTo: true,
        requireLogin: false,
        level: 0,
        isKeepAlive: false,
        pageName: '首页'
      }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
