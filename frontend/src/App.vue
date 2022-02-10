<template>
  <div class="container mx-auto px-2">
    <header class="flex flex-col justify-items-stretch">
      <div class="nav flex flex-row justify-between mb-5 py-5 border-b-2">
        <div class="nav-logo text-2xl font-bold">
          Starter Blog
        </div>
        <div class="nav-links flex flex-row items-center">
          <router-link
            to="/"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
            >Home</router-link
          >
          <router-link
            to="/blog"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
            >Blog</router-link
          >
          <router-link
            to="/categories"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
            >Category</router-link
          >
          <router-link
            to="/tags"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
            >Tag</router-link
          >
          <router-link
            to="/about"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
            >About</router-link
          >
          <router-link
            to="/"
            class="mx-2 font-sans font-medium hover:underline hover:text-teal-700"
            >Sign in / Sign up</router-link
          >
        </div>
      </div>
    </header>

    <router-view />

    <footer class="flex flex-col place-items-center mt-5 py-5 border-t-2">
      <div class="mb-3 flex space-x-4">
        <i
          class="fa-brands fa-linkedin text-3xl text-gray-700 hover:text-teal-700"
        ></i>
        <i
          class="fa-brands fa-facebook-square text-3xl text-gray-700 hover:text-teal-700"
        ></i>
        <i
          class="fa-brands fa-twitter-square text-3xl text-gray-700 hover:text-teal-700"
        ></i>
        <i
          class="fa-brands fa-google-plus-square text-3xl text-gray-700 hover:text-teal-700"
        ></i>
        <i
          class="fa-brands fa-github-square text-3xl text-gray-700 hover:text-teal-700"
        ></i>
        <i
          class="fa-brands fa-dev text-3xl text-gray-700 hover:text-teal-700"
        ></i>
      </div>
      <div class="mb-3 flex space-x-1 text-sm text-gray-700">
        <div>
          <a
            href="https://www.ericsdevblog.com"
            class="hover:underline hover:text-teal-700"
            >Eric Hu</a
          >
        </div>
        <div>•</div>
        <div>© 2022</div>
        <div>•</div>
        <a href="/" class="hover:underline hover:text-teal-700"
          >Vue.js Starter Blog</a
        >
      </div>
    </footer>
  </div>
</template>
