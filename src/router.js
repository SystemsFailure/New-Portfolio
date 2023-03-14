import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import MainPage from "@/pages/MainPage";
import HomeComp from "@/components/HomeComp";
import AboutComp from "@/components/AboutComp";
import ResumeComp from "@/components/ResumeComp";
import BlogComp from "@/components/BlogComp";


const routes = [
    {
        path: '/', component: MainPage
    },
    {
        path: '/home', component: HomeComp
    },
    {
        path: '/about', component: AboutComp
    },
    {
        path: '/cv', component: ResumeComp
    },
    {
        path: '/blog', component: BlogComp
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


export default router