<template>
  <div class="flex flex-col my-4 py-4 space-y-10 border-t-2">
    <p class="font-bold text-2xl">Comments:</p>

    <!-- If the user is not authenticated -->
    <div v-if="!isAuthenticated">
      You need to
      <router-link
        to="/account"
        class="text-teal-500 hover:underline hover:text-teal-700"
        >sign in</router-link
      >
      before you can leave your comment.
    </div>

    <!-- If the user is authenticated -->
    <div v-else>
      <div v-if="commentSubmitSuccess" class="">
        Your comment will show up here after is has been approved.
      </div>
      <form action="POST" @submit.prevent="submitComment">
        <textarea
          type="text"
          class="border-2 focus:ring-teal-500 p-4 outline-none rounded-md w-full"
          rows="5"
          v-model="commentContent"
        />

        <button
          class="mt-4 w-full bg-teal-500 hover:bg-teal-700 focus:ring focus:ring-teal-100 text-white py-2 rounded-md text-lg tracking-wide"
        >
          Submit Comment
        </button>
      </form>
    </div>

    <!-- List all comments -->
    <comment-single
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      :userID="this.userID"
    >
    </comment-single>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SUBMIT_COMMENT } from "@/mutations";
import CommentSingle from "@/components/CommentSingle.vue";

export default {
  components: { CommentSingle },
  name: "CommentSectionComponent",
  data() {
    return {
      commentContent: "",
      commentSubmitSuccess: false,
    };
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
    postID: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    submitComment() {
      if (this.commentContent !== "") {
        this.$apollo
          .mutate({
            mutation: SUBMIT_COMMENT,
            variables: {
              content: this.commentContent,
              userID: this.userID,
              postID: this.postID,
            },
          })
          .then(() => (this.commentSubmitSuccess = true));
      }
    },
  },
};
</script>
