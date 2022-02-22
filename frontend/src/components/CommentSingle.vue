<template>
  <div class="border-2 p-4">
    <div
      class="flex flex-row justify-start content-center items-center space-x-2 mb-2"
    >
      <img
        :src="`http://127.0.0.1:8000/media/${this.comment.user.avatar}`"
        alt=""
        class="w-10"
      />
      <p class="text-lg font-sans font-bold">
        {{ this.comment.user.username }}
      </p>
      <p class="text-sm text-gray-500">
        - {{ formatDate(this.comment.createdAt) }}
      </p>
    </div>

    <p>
      {{ this.comment.content }}
    </p>

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
  </div>
</template>

<script>
import { UPDATE_COMMENT_LIKE } from '@/mutations';

export default {
  name: "CommentSingleComponent",
  data() {
    return {
      liked: false,
      numberOfLikes: 0,
    };
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  async created() {
    // Check if the current user has liked the comment
    let likedUsers = this.comment.likes;

    for (let likedUser in likedUsers) {
      if (likedUsers[likedUser].id === this.userID) {
        this.liked = true;
      }
    }
    // Get the number of likes
    console.log(this.comment.numberOfLikes)
    this.numberOfLikes = parseInt(this.comment.numberOfLikes);
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
      mutation: UPDATE_COMMENT_LIKE,
      variables: {
        commentID: this.comment.id,
        userID: this.userID,
      },
    });
    },
  },
};
</script>
