<template>
  <div class="flex flex-col justify-start items-center h-screen">
    <ul class="flex justify-center items-center my-4 font-sans font-medium">
      <div v-for="(tab, index) in tabs" :key="index">
        <li
          class="cursor-pointer py-2 px-4 text-gray-500 border-b-2"
          :class="activeTab === index ? 'text-teal-700 border-teal-700' : ''"
          @click="activeTab = index"
          v-text="tab"
        ></li>
      </div>
    </ul>

    <div class="w-full md:w-96 bg-white p-10 mx-auto border">
      <div v-show="activeTab === 0">
        <form action="POST" @submit.prevent="userSignIn">
          <div class="bg-white rounded-xl w-full max-w-sm">
            <div class="space-y-4">
              <div>
                <label for="email" class="block mb-1 text-gray-600 font-medium"
                  >Username</label
                >
                <input
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  v-model="signInDetails.username"
                />
              </div>
              <div>
                <label for="email" class="block mb-1 text-gray-600 font-medium"
                  >Password</label
                >
                <input
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  v-model="signInDetails.password"
                />
              </div>
            </div>
            <button
              class="mt-4 w-full bg-teal-500 hover:bg-teal-700 focus:ring focus:ring-teal-100 text-white py-2 rounded-md text-lg tracking-wide"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div v-show="activeTab === 1">
        <form action="POST" @submit.prevent="userSignUp">
          <div class="bg-white rounded-xl w-full max-w-sm">
            <div class="space-y-4">
              <div>
                <label for="email" class="block mb-1 text-gray-600 font-medium"
                  >Username</label
                >
                <input
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  v-model="signUpDetails.username"
                />
              </div>
              <div>
                <label for="email" class="block mb-1 text-gray-600 font-medium"
                  >Email</label
                >
                <input
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  v-model="signUpDetails.email"
                />
              </div>
              <div>
                <label for="email" class="block mb-1 text-gray-600 font-medium"
                  >Password</label
                >
                <input
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  v-model="signUpDetails.password"
                />
              </div>
            </div>
            <button
              class="mt-4 w-full bg-teal-500 hover:bg-teal-700 focus:ring focus:ring-teal-100 text-white py-2 rounded-md text-lg tracking-wide"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AccountView",
  data() {
    return {
      activeTab: 0,
      tabs: ["Sign In", "Sign Up"],
      signInDetails: {
        username: "",
        password: "",
      },
      signUpDetails: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["signUp", "signIn"]),
    userSignIn: function () {
      this.signIn(this.signInDetails).then(() => this.$router.push("/success"));
    },
    userSignUp: function () {
      this.signUp(this.signUpDetails).then(() => this.$router.push("/success"));
    },
  },
};
</script>
