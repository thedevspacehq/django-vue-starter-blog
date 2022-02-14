<template>
  <div class="flex flex-col place-content-center place-items-center">
    <div class="py-8 border-b-2">
      <h1 class="text-5xl font-extrabold">All Categories</h1>
    </div>
    <div class="flex flex-wrap py-8">
      <router-link
        v-for="category in allCategories"
        :key="category.name"
        class="my-2 mr-5 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
        :to="`/category/${category.slug}`"
        >{{ category.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { ALL_CATEGORIES } from "@/queries";

export default {
  name: "CategoriesView",

  data() {
    return {
      allCategories: null,
    };
  },

  async created() {
    const posts = await this.$apollo.query({
      query: ALL_CATEGORIES,
    });
    this.allCategories = posts.data.allCategories;
  },
};
</script>
