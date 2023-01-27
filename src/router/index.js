import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/",
    name: "AboutMe",
    component: () =>
      import(/* webpackChunkName: "AboutMe" */ "@/views/AboutMeView.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "Experience" */ "@/views/ExperienceView.vue"),
  },
  {
    path: "/studies",
    name: "Studies",
    component: () =>
      import(/* webpackChunkName: "Studies" */ "@/views/StudiesView.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "Projects" */ "@/views/ProjectsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
