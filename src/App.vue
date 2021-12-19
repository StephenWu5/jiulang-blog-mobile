<script lang="ts">
import { reactive } from "vue";
import Nav from "./components/layouts/nav.vue";
import Content from "./components/layouts/content.vue";
import Footer from "./components/layouts/footer.vue";

import { isMobileOrPc } from './utils/index';
// 移动端 rem 单位适配
if (isMobileOrPc()) {
	// width * 100 / 750 = width / 7.5
	// 1rem = 100px
	var width = window.screen.width;
	window.document.getElementsByTagName("html")[0].style.fontSize =
		width / 7.5 + "px";
}

export default {
	components: {
		Nav,
		Content,
		Footer,
	},
	setup() {
		const name = reactive({
			name: "hello 番茄",
		});
		const parentClick = (e: any) => {
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
