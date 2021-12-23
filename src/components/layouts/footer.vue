<script lang="ts">
import { reactive, ref } from "vue";
export default {
	name: "Footer",
	setup() {
        let codeUrl = ref('../../assets/code.jpg');
		let user = reactive({
			wechat: "1234567890",
			email: "1234567890@qq.com",
		});
		return {
			user,
            codeUrl,
		};
	},
};
</script>
<template>
	<div class="footer-wrap">
		<div class="footer">
			<div class="qrcode">
				<img src="../../assets/code.jpg" alt="" />
			</div>
			<div class="practice-mode">
				<div class="text">
					<h4 class="title">大家好，欢迎来到我的博客</h4>
					<p class="title">我的联系方式</p>
					<p>
						微信<span class="WeChat">{{ user.wechat }}</span>
					</p>
					<p>
						邮箱<span class="email">{{ user.email }}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.footer-wrap {
	border-top: 1px solid #402863;
}
.footer {
	padding: 40px 30px 80px;
	position: relative;
	overflow: auto;
	height: 380px;
}
.footer .qrcode {
	width: 240px;
}
.footer .practice-mode {
	padding-top: 40px;
}
.footer .practice-mode img {
	float: left;
	padding-right: 28px;
}
.footer .practice-mode .text {
	color: #3f2863;
	float: left;
}
.footer .practice-mode h4.text {
	font-size: 20px;
	line-height: 60px;
}
.footer .practice-mode .text p {
	line-height: 32px;
}
.footer .practice-mode .text p span {
	padding-left: 24px;
}
</style>
