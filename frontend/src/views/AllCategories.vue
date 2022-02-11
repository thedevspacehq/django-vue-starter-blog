<template>
	<div class="grid grid-cols-6 auto-rows-max h-96 content-center">
		<div class="col-span-2 border-r-2 text-right px-5">
			<h1 class="text-5xl font-extrabold mb-2">All Categories</h1>
			<p class="text-gray-500 text-base mb-5">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, hic.
			</p>
		</div>
		<div class="col-span-4 px-5 flex flex-row flex-wrap">
			<router-link
				v-for="category in allCategories"
				:key="category.name"
				class="mr-3 text-lg uppercase text-teal-500 hover:underline hover:text-teal-700"
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
