<template>
  <div class="flex flex-col my-4 py-4 space-y-10 border-t-2">
    <p class="font-bold text-2xl">Comments:</p>

    <!-- If the user is not authenticated -->
    <div v-if="!this.user.isAuthenticated">
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
      <div v-if="this.commentSubmitSuccess" class="">
        Your comment will show up here after is has been approved.
      </div>
      <form action="POST" @submit.prevent="submitComment">
        <textarea
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
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
import { SUBMIT_COMMENT } from "@/mutations";
import CommentSingle from "@/components/CommentSingle.vue";
import { useUserStore } from "@/stores/user";

export default {
  components: { CommentSingle },
  name: "CommentSectionComponent",

  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  data() {
    return {
      commentContent: "",
      commentSubmitSuccess: false,
      user: {
        isAuthenticated: false,
        token: this.userStore.getToken || "",
        info: this.userStore.getUser || {},
      },
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
  async created() {
    if (this.user.token) {
      this.user.isAuthenticated = true;
    }
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
