import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Logout from "@/pages/Logout.vue";

import UserManagement from "@/pages/admin/UserManagement.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
