<template>
	<div class="home">
		<div class="flex flex-col place-items-center border-b-2">
			<img :src="`http://127.0.0.1:8000/media/${postBySlug.featuredImage}`" class="max-w-5xl my-5"/>
			<p class="text-gray-500 text-lg mb-2">{{postBySlug.createdAt}}</p>
			<h1 class="text-5xl font-extrabold mb-5">{{postBySlug.title}}</h1>
		</div>
		<div class="py-5 font-serif space-y-4">
      <div v-html="postBySlug.content"></div>
    </div>
	</div>
</template>

<script>
import gql from "graphql-tag";

export default {
	name: "PostView",

	data() {
		return {
			postBySlug: null,
		};
	},

	async created() {
		const post = await this.$apollo.query({
			query: gql`
				query ($slug: String!) {
					postBySlug(slug: $slug) {
						title
						content
						featuredImage
						createdAt
						category {
							name
							slug
						}
						tag {
							name
							slug
						}
						user {
							username
							firstName
							lastName
						}
					}
				}
			`,
			variables: {
				slug: this.$route.params.slug,
			},
		});
		this.postBySlug = post.data.postBySlug;
	},
};
</script>
