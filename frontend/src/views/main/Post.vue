<template>
  <div class="home">
    <div class="flex flex-col place-items-center border-b-2">
      <!-- Featured Image and title -->
      <img
        :src="`http://127.0.0.1:8000/media/${postBySlug.featuredImage}`"
        class="w-full my-5"
      />
      <h1 class="text-center text-5xl font-extrabold mb-5">
        {{ postBySlug.title }}
      </h1>
      <p class="text-gray-500 text-lg mb-2">
        {{ formatDate(postBySlug.createdAt) }} - By
        {{ postBySlug.user.username }}
      </p>
    </div>

    <!-- Main content -->
    <div class="py-5 font-serif space-y-4">
      <div v-html="postBySlug.content"></div>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap">
      <div class="my-2 mr-5 text-sm font-medium">Tags:</div>
      <router-link
        v-for="tag in postBySlug.tag"
        :key="tag.name"
        class="my-2 mr-5 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
        :to="`/tag/${tag.slug}`"
        >{{ tag.name }}</router-link
      >
    </div>

    <!-- Comment Section -->
    <!-- Pass the approved comments and the post id to the comment component -->
    <CommentSectionComponent
      v-if="this.approvedComments"
      :comments="this.approvedComments"
      :postID="this.postBySlug.id"
    ></CommentSectionComponent>
  </div>
</template>

<script>
import { POST_BY_SLUG } from "@/queries";
import CommentSectionComponent from "@/components/CommentSection.vue";

export default {
  name: "PostView",

  components: { CommentSectionComponent },

  data() {
    return {
      postBySlug: null,
      comments: null,
    };
  },

  computed: {
    // Filters out the unapproved comments
    approvedComments() {
      return this.comments.filter((comment) => comment.isApproved);
    },
  },

  async created() {
    // Get the post before the instance is mounted
    const post = await this.$apollo.query({
      query: POST_BY_SLUG,
      variables: {
        slug: this.$route.params.slug,
      },
    });
    this.postBySlug = post.data.postBySlug;
    this.comments = post.data.postBySlug.commentSet;
  },

  methods: {
    formatDate(x) {
      let date = new Date(x);
      var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][date.getMonth()];
      return month + " " + date.getDate() + ", " + date.getFullYear();
    },
  },
};
</script>
