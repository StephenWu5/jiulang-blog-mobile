<script lang="ts">
import { reactive } from "vue";
import Nav from "./components/layouts/nav.vue";
import Content from "./components/layouts/content.vue";
import Footer from "./components/layouts/footer.vue";

export default {
	components: {
		Nav,
		Content,
		Footer,
	},
	setup() {
		const name = reactive({
			name: "hello word",
		});
		const parentClick = (e: any) => {
			const name: string = 8 + "";
			console.log(e);
		};
		return { name, parentClick };
	},
};
</script>
<template>
	<div>
		<Nav />
		<Content />
		<Footer />
	</div>
</template>

<style lang="scss"></style>
