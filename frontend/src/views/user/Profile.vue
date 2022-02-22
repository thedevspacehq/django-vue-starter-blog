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

      <button
        class="block text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        @click="this.modalIsHidden = !this.modalIsHidden"
      >
        Update Your Profile
      </button>

      <div
        id="editProfile"
        aria-hidden="true"
        :class="{ hidden: modalIsHidden }"
        class="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:h-full md:inset-x-1/4"
      >
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow-lg border-2">
            <div
              class="flex justify-between items-start p-5 rounded-t border-b"
            >
              <h3
                class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white"
              >
                Update Your Profile
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="defaultModal"
                @click="this.modalIsHidden = !this.modalIsHidden"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form
              action="POST"
              enctype="multipart/form-data"
              @submit.prevent="updateProfile"
            >
              <div class="p-6 space-y-6">
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      for="firstName"
                      class="block mb-1 text-gray-600 font-medium"
                      >First Name</label
                    >
                    <input
                      v-model="profileUpdateInputs.firstName"
                      name="firstName"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block mb-1 text-gray-600 font-medium"
                      >Last Name</label
                    >
                    <input
                      v-model="profileUpdateInputs.lastName"
                      name="lastName"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      for="formFile"
                      class="block mb-1 text-gray-600 font-medium"
                      >Avatar</label
                    >
                    <input
                      @change="selectImage($event)"
                      class="mt-1 block w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                      type="file"
                      id="formFile"
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block mb-1 text-gray-600 font-medium"
                      >Email</label
                    >
                    <input
                      v-model="profileUpdateInputs.email"
                      name="email"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      for="location"
                      class="block mb-1 text-gray-600 font-medium"
                      >Location</label
                    >
                    <input
                      v-model="profileUpdateInputs.location"
                      name="location"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      for="website"
                      class="block mb-1 text-gray-600 font-medium"
                      >Website</label
                    >
                    <input
                      v-model="profileUpdateInputs.website"
                      name="website"
                      type="text"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label for="bio" class="block mb-1 text-gray-600 font-medium"
                    >Bio</label
                  >
                  <textarea
                    v-model="profileUpdateInputs.bio"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                    rows="5"
                  />
                </div>
              </div>

              <div
                class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
              >
                <button
                  data-modal-toggle="defaultModal"
                  type="submit"
                  class="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  @click="this.modalIsHidden = !this.modalIsHidden"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
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
import { UPDATE_USER_PROFILE } from "@/mutations";

export default {
  name: "ProfileView",

  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("user")),
      modalIsHidden: true,
      profileUpdateInputs: {
        firstName: "",
        lastName: "",
        avatar: null,
        email: "",
        location: "",
        website: "",
        bio: "",
      },
    };
  },

  methods: {
    async updateProfile() {
      const user = await this.$apollo.mutate({
        mutation: UPDATE_USER_PROFILE,
        variables: {
          userID: this.userInfo.id,
          firstName: this.profileUpdateInputs.firstName,
          lastName: this.profileUpdateInputs.lastName,
          avatar: this.profileUpdateInputs.avatar,
          bio: this.profileUpdateInputs.bio,
          location: this.profileUpdateInputs.location,
          website: this.profileUpdateInputs.website,
        },
      });
      localStorage.setItem(
        "user",
        JSON.stringify(user.data.updateUserProfile.user)
      );

      // Refresh the page
      this.$router.go();
    },

    selectImage(event){
      this.profileUpdateInputs.avatar = event.target.files[0];
      console.log(this.profileUpdateInputs.avatar);
    }
  },
};
</script>
