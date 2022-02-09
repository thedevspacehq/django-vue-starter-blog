<template>
  <div class="home">
    <h1 class="text-5xl font-extrabold mb-2">Recent Posts</h1>
    <p class="text-gray-500 text-lg mb-5">A blog created with Django, Vue.js and TailwindCSS</p>
    
    <post-list></post-list>

    <div class="flex justify-end font-medium">
      <a class="text-teal-500 hover:underline hover:text-teal-700" href="/">All Posts →</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  components: { PostList },
  name: "HomeView",
};
</script>
