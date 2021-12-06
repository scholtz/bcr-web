import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Logout from "@/pages/Logout.vue";
import UserManagement from "@/pages/admin/UserManagement.vue";
import PlantInfo from "@/pages/plant/Info.vue";
import KYC from "@/pages/KYC.vue";
import NotFound from "@/pages/404.vue";
import Certificate from "@/pages/plant/Certificate.vue";
import CarbonFriendly from "@/pages/carbonFriendly/CarbonFriendly.vue";

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
    path: "/user/kyc",
    name: "KYC",
    component: KYC,
  },
  {
    path: "/plant/info",
    name: "PlantInfo",
    component: PlantInfo,
  },
  {
    path: "/plant/certificate",
    name: "Certificate",
    component: Certificate,
  },
  {
    path: "/carbonFriendly/CarbonFriendly",
    name: "CarbonFriendly",
    component: CarbonFriendly,
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
