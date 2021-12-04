import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Logout from "@/pages/Logout.vue";
import UserManagement from "@/pages/admin/UserManagement.vue";
import PlantInfo from "@/pages/plant/Info.vue";
import NotFound from "@/pages/404.vue";
import Registration from "@/pages/Registration.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/admin/user-management",
    name: "user-management",
    component: UserManagement,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/plant/info",
    name: "PlantInfo",
    component: PlantInfo,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
