<template>
	<div class="all-tags">
		<h1 class="text-5xl font-extrabold mb-2">Tag Name</h1>
		<p class="text-gray-500 text-lg mb-5">A blog created with Django, Vue.js and TailwindCSS</p>

		<post-list :posts="postsByTag"></post-list>

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
	name: "TagView",

	data() {
		return {
			postsByTag: null,
		};
	},

	async created() {
		const posts = await this.$apollo.query({
			query: gql`
				query ($tag: String!) {
					postsByTag(tag: $tag) {
						title
						slug
						content
						isPublished
						isFeatured
						createdAt
            category {
							name
							slug
						}
					}
				}
			`,
			variables: {
				tag: this.$route.params.tag,
			},
		});
		this.postsByTag = posts.data.postsByTag;
	},
};
</script>
