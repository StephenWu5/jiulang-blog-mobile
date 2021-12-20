<script lang="ts">
export default {
	name: "Footer",
	setup() {
		return {};
	},
};
</script>

<template>
	<div class="footer-wrap">
		<div class="footer w1000">
			<div class="qrcode"></div>
			<div class="practice-mode">
				<div class="text">
					<p class="title">大家好，欢迎来到我的博客</p>
					<p class="title">我的联系方式</p>
					<p>微信<span class="WeChat">1234567890</span></p>
					<p>邮箱<span class="email">1234567890@qq.com</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
div {
	font-size: 20px;
	color: black;
	p {
		font-size: 41px;
	}
}
</style>
