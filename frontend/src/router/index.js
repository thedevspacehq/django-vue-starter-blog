import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/main/Home.vue";
import PostView from "@/views/main/Post.vue";
import CategoryView from "@/views/main/Category.vue";
import TagView from "@/views/main/Tag.vue";
import AllCategoriesView from "@/views/main/AllCategories.vue";
import AllTagsView from "@/views/main/AllTags.vue";
import SignInView from "@/views/user/SignIn.vue";
import SignUpView from "@/views/user/SignUp.vue";
import ProfileView from "@/views/user/Profile.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/category/:category",
    name: "Category",
    component: CategoryView,
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: TagView,
  },
  {
    path: "/post/:slug",
    name: "Post",
    component: PostView,
  },
  {
    path: "/categories",
    name: "Categories",
    component: AllCategoriesView,
  },
  {
    path: "/tags",
    name: "Tags",
    component: AllTagsView,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignInView,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
