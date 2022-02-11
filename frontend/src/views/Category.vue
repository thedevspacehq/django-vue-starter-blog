<template>
	<div class="all- posts">
		<h1 class="text-5xl font-extrabold mb-2">Category Name</h1>
		<p class="text-gray-500 text-lg mb-5">A blog created with Django, Vue.js and TailwindCSS</p>

		<post-list :posts="postsByCategory"></post-list>

		<div class="space-y-2 pt-6 pb-8 md:space-y-5">
			<nav class="flex justify-between">
				<button rel="previous">Previous</button>
				<span>1 of 2</span>
				<button rel="next">Next</button>
			</nav>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";
import gql from "graphql-tag";

export default {
	components: { PostList },
	name: "CategoryView",

	data() {
		return {
			postsByCategory: null,
		};
	},

	async created() {
		const posts = await this.$apollo.query({
			query: gql`
				query ($category: String!) {
					postsByCategory(category: $category) {
						title
						slug
						content
						isPublished
						isFeatured
						createdAt
					}
				}
			`,
			variables: {
				category: this.$route.params.category,
			},
		});
		this.postsByCategory = posts.data.postsByCategory;
	},
};
</script>
