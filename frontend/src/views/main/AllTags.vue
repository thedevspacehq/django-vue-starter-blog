<template>
  <div class="flex flex-col place-content-center place-items-center">
    <div class="py-8 border-b-2">
      <h1 class="text-5xl font-extrabold">All Tags</h1>
    </div>
    <div class="flex flex-wrap py-8">
      <router-link
        v-for="tag in this.allTags"
        :key="tag.name"
        class="my-2 mr-5 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
        :to="`/tag/${tag.slug}`"
        >{{ tag.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { ALL_TAGS } from "@/queries";

export default {
  name: "TagsView",

  data() {
    return {
      allTags: null,
    };
  },

  async created() {
    const posts = await this.$apollo.query({
      query: ALL_TAGS,
    });
    this.allTags = posts.data.allTags;
  },
};
</script>
