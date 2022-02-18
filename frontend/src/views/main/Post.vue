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

    <!-- Like -->
    <div class="flex flex-wrap py-4 space-x-2 items-center">
      <p class="my-2 text-sm font-medium">Likes:</p>
      <div v-if="this.liked === true" @click="this.updateLike()">
        <i class="fa-solid fa-thumbs-up">
          <span class="font-sans text-sm font-normal ml-1">{{
            this.numberOfLikes
          }}</span>
        </i>
      </div>
      <div v-else @click="this.updateLike()">
        <i class="fa-regular fa-thumbs-up">
          <span class="font-sans text-sm font-normal ml-1">{{
            this.numberOfLikes
          }}</span>
        </i>
      </div>
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
import { UPDATE_POST_LIKE } from "@/mutations";

export default {
  name: "PostView",

  components: { CommentSectionComponent },

  data() {
    return {
      postBySlug: null,
      comments: null,
      liked: false,
      numberOfLikes: 0,
      userID: null,
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

    // Check if the current user has liked the post
    // Get the current user id
    this.userID = JSON.parse(localStorage.getItem("user")).id;

    // Find if the current user has liked the post
    let likedUsers = this.postBySlug.likes;

    for (let likedUser in likedUsers) {
      if (likedUsers[likedUser].id === this.userID) {
        this.liked = true;
      }
    }

    // Get the number of likes
    this.numberOfLikes = parseInt(this.postBySlug.numberOfLikes);
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
    updateLike() {
      if (this.liked === true) {
        this.numberOfLikes = this.numberOfLikes - 1;
      } else {
        this.numberOfLikes = this.numberOfLikes + 1;
      }
      this.liked = !this.liked;

      this.$apollo.mutate({
      mutation: UPDATE_POST_LIKE,
      variables: {
        postID: this.postBySlug.id,
        userID: this.userID,
      },
    });
    },
  },
};
</script>
