import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Main from '@/views/Main.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', component: Home,
            children: [
                { path: '/home/ads', component: () => import('@/views/home/Ads') },
                { path: '/home/types', component: () => import('@/views/home/Types') },
                { path: '/product/create', component: () => import('@/views/product/Create') },
                { path: '/product/list/:id', component: () => import('@/views/product/List') },
                { path: '/product/edit/:id', component: () => import('@/views/product/Edit') },
                { path: '/user/create', component: () => import('@/views/user/Create') },
                { path: '/user/list/:id', component: () => import('@/views/user/List') },
                { path: '/user/edit:id', component: () => import('@/views/user/Edit') },
                { path: '*', component: Main }
            ]
        }
    ]
})