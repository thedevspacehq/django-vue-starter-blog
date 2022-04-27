<template>
  <div class="home">
    <h1 class="text-5xl font-extrabold mb-2">Recent Posts</h1>
    <p class="text-gray-500 text-lg mb-5">
      A blog created with Django, Vue.js and TailwindCSS
    </p>

    <post-list :posts="this.allPosts"></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import { ALL_POSTS } from "@/queries";

export default {
  components: { PostList },
  name: "HomeView",

  data() {
    return {
      allPosts: null,
    };
  },

  async created() {
    const posts = await this.$apollo.query({
      query: ALL_POSTS,
    });
    this.allPosts = posts.data.allPosts;
  },
};
</script>
