<template>
  <div class="home">
    <div class="flex flex-col place-items-center border-b-2">
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
    <div class="py-5 font-serif space-y-4">
      <div v-html="postBySlug.content"></div>
    </div>
    <div class="flex flex-wrap border-b-2">
      <div class="my-2 mr-5 text-sm font-medium">Tags:</div>
      <router-link
        v-for="tag in postBySlug.tag"
        :key="tag.name"
        class="my-2 mr-5 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
        :to="`/tag/${tag.slug}`"
        >{{ tag.name }}</router-link
      >
    </div>
    <div class="flex flex-col my-4 space-y-10">
      <p class="font-bold text-2xl">Comments:</p>
      <div v-for="comment in approvedComments" :key="comment.id">
        <div
          class="flex flex-row justify-start content-center items-center space-x-2 mb-2"
        >
          <img
            :src="`http://127.0.0.1:8000/media/${comment.user.avatar}`"
            alt=""
            class="w-10"
          />
          <p class="text-lg font-sans font-bold">{{ comment.user.username }}</p>
          <p class="text-sm text-gray-500">- {{ formatDate(comment.createdAt) }}</p>
        </div>

        <p>
          {{ comment.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { POST_BY_SLUG } from '@/queries';

export default {
  name: "PostView",

  data() {
    return {
      postBySlug: null,
      comments: null,
    };
  },

  computed: {
    approvedComments(){
      return this.comments.filter((comment) => comment.isApproved)
    }
  },

  async created() {
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
