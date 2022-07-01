import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Service from '../views/pages/Service.vue'
import Portfolio from '../views/pages/Portfolio.vue'
import Contact from '../views/pages/Contact.vue'
import Blog from '../views/pages/Blog.vue'
import BlogDetails from '../views/pages/BlogDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog-details',
    name: 'blog_details',
    component: BlogDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
