import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login.vue";
import Products from "../components/Products.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Navbar.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
