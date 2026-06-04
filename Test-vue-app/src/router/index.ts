import { createRouter,createWebHistory } from  'vue-router';
import HomeView from "@/views/HomeView.vue"
import JobView from '@/views/JobView.vue'
import singlejobView from '@/views/singlejobView.vue';
import SinglejobView from '@/views/singlejobView.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'home',
            component: HomeView
        },

           {
            path:'/jobs/:id',
            name: 'singleJob',
            component: SinglejobView
        },
         {
            path:'/jobs',
            name: 'job',
            component: JobView
        },
    ],

});

export default router;