import { createRouter, createWebHistory, CreateWebHistory } from "vue-router";
import AboutMe from "@/views/AboutMe.vue"
//import Experience from "@/views/Experience.vue"

const routes = [
    {
        path: "/",
        name: "AboutMe",
        component: AboutMe
    },
    {
        path: "/experience",
        name: "Experience",
        component: () =>
            import("@/views/Experience.vue")
    }
    //{
    //    path: "/experience",
    //    name: "Experience",
    //    component: Experience
    //}
    ,
    {
        path: "/studies",
        name: "Studies",
        component: () =>
            import("@/views/Studies.vue")
    }
    ,
    {
        path: "/projects",
        name: "Projects",
        component: () =>
            import("@/views/Projects.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;