import Vue from 'vue'
import VueRouter from 'vue-router'

//Importing Routing components
import About from '@/js/pages/About'
import Home from '@/js/pages/Home'
import Blog from '@/js/pages/Blog'
import FirstBlog from '@/js/blogs/FirstBlog'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/blog',
        name: 'blog',
        component: Blog,
        children: [{
            path: '',
            component: FirstBlog
        }]
    }, {
        path: '/about',
        name: 'about',
        component: About
    }]
});

export default router;