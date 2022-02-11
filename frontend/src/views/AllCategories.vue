<template>
	<div class="flex flex-col items-start justify-start divide-y divide-gray-500 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
		<div class="space-x-2 pt-6 pb-8 md:space-y-5">
			<h1 class="text-5xl font-extrabold">All Categories</h1>
		</div>
		<div class="flex max-w-lg flex-wrap">
			<router-link
				v-for="category in allCategories"
				:key="category.name"
				class="my-2 mr-5 text-sm font-medium uppercase text-teal-500 hover:underline hover:text-teal-700"
				:to="`/category/${category.slug}`"
				>{{ category.name }}</router-link
			>
		</div>
	</div>
</template>

<script>
import gql from "graphql-tag";

export default {
	name: "CategoriesView",

	data() {
		return {
			allCategories: null,
		};
	},

	async created() {
		const posts = await this.$apollo.query({
			query: gql`
				query {
					allCategories {
						name
						slug
					}
				}
			`,
		});
		this.allCategories = posts.data.allCategories;
	},
};
</script>
