<template>
  <div class="flex flex-col">
    <div>
      <img
        :src="`http://127.0.0.1:8000/media/${userInfo.avatar}`"
        alt=""
        class="w-32 h-3w-32 rounded-lg object-contain mx-auto"
      />
    </div>
    <div class="grid grid-col-1 md:grid-cols-2 gap-4 my-24 border-2 p-10">
      <div class="md:self-center md:px-4 md:space-y-2">
        <p class="font-serif text-5xl">
          {{ userInfo.firstName }} {{ userInfo.lastName }}
        </p>
        <p class="font-sans text-lg">@{{ userInfo.username }}</p>
        <p>Location: {{ userInfo.location }}</p>
        <p>
          Website: <a :href="userInfo.website">{{ userInfo.website }}</a>
        </p>
      </div>
      <div class="font-serif">
        <p>
          {{ userInfo.bio }}
        </p>
      </div>
    </div>
    <div class="border-2 p-10 space-y-10 divide-y-2">
      <h2 class="font-serif text-3xl">Comments:</h2>
      <div
        v-for="comment in userInfo.commentSet"
        :key="comment.id"
        class="py-4"
      >
        <h3 class="font-sans font-bold text-lg">
          <a :href="`/post/${comment.post.slug}`">{{ comment.post.title }}</a> -
          <span v-if="comment.isApproved" class="text-teal-500">Approved</span
          ><span v-else class="text-red-500"> Not Approved</span>
        </h3>
        <p class="font-serif text-gray-500 text-sm pt-2">
          {{ comment.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { CURRENT_USER } from "@/queries";

export default {
  name: "ProfileView",

  data() {
    return {
      userInfo: {},
    };
  },

  async created() {
    const currentUser = await this.$apollo.query({
      query: CURRENT_USER,
      variables: {
        id: JSON.parse(localStorage.getItem("user")).id,
      },
    });
    this.userInfo = currentUser.data.currentUser;
    // console.log(this.userInfo);
  },
};
</script>
