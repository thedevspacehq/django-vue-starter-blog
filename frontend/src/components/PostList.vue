<template>
  <div class="post-list">
    <ul class="divide-y divide-gray-200">

      <li class="py-12" v-bind:key="i" v-for="i in 5">
        <article>
          <div
            class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
          >
            <dl>
              <dt class="sr-only">Published on</dt>
              <dd
                class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
              >
                <time>August 7, 2021</time>
              </dd>
            </dl>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <div>
                  <h2 class="text-2xl font-bold leading-8 tracking-tight">
                    <a class="text-gray-900" href="/post"
                      >Lorem ipsum dolor sit amet consectetur adipisicing
                      elit</a
                    > - 
                    <a class="font-sans text-teal-500 hover:underline hover:text-teal-700" href="/category"
                      >Category Name</a
                    >
                  </h2>
                  <div class="flex flex-wrap">
                    <a
                      class="mr-3 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
                      href="/tag"
                      >Vue.js</a
                    >
                    <a
                      class="mr-3 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
                      href="/tag"
                      >Django</a
                    >
                    <a
                      class="mr-3 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
                      href="/tag"
                      >TailwindCSS</a
                    >
                  </div>
                </div>
                <div class="prose max-w-none text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus corrupti fugit commodi quo neque porro ducimus vero,
                  cum accusamus dolore. Illum hic optio incidunt enim
                  aspernatur, veniam modi animi blanditiis?
                </div>
              </div>
              <div class="text-base font-medium leading-6">
                <a class="text-teal-500 hover:underline hover:text-teal-700" href="/"
                  >Read more →</a
                >
              </div>
            </div>
          </div>
        </article>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
};
</script>
