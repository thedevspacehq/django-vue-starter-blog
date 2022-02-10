import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import BlogView from '../views/Blog.vue'
import PostView from '../views/Post.vue'
import CategoryView from '../views/Category.vue'
import TagView from '../views/Tag.vue'
import CategoriesView from '../views/Categories.vue'
import TagsView from '../views/Tags.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },
  {
    path: '/category',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/tag',
    name: 'Tag',
    component: TagView
  },
  {
    path: '/post',
    name: 'Post',
    component: PostView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesView
  },
  {
    path: '/tags',
    name: 'Tags',
    component: TagsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
