import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import PostView from '@/views/Post.vue'
import CategoryView from '@/views/Category.vue'
import TagView from '@/views/Tag.vue'
import AllCategoriesView from '@/views/AllCategories.vue'
import AllTagsView from '@/views/AllTags.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
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
    path: '/categories',
    name: 'Categories',
    component: AllCategoriesView
  },
  {
    path: '/tags',
    name: 'Tags',
    component: AllTagsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
