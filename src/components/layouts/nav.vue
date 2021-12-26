<script lang="ts">
import { reactive } from "@vue/reactivity";
import { Popup } from "vant";
import { Grid, GridItem } from "vant";
export default {
	name: "Nav",
	components: {
		[Popup.name]: Popup,
		[Grid.name]: Grid,
		[GridItem.name]: GridItem,
	},
	setup() {
		const state = reactive({
			showPopUp: true,
		});
		return {
			state,
		};
	},
};
</script>

<template>
	<div class="header">
		<van-popup
			v-model:show="state.showPopUp"
			position="left"
			:style="{ height: '100%', width: '30%' }"
			>内容内容内容内容内容内容内容121
		</van-popup>
		<van-grid :border="false">
			<van-grid-item icon="photo-o" text="首页" />
			<van-grid-item icon="" text="" />
			<van-grid-item icon="" text="" />
			<van-grid-item icon="photo-o" text="导航" />
		</van-grid>
		<div class="menu-btn">
			<div class="menu"></div>
		</div>
		<h1 class="logo">
			<a href="index.html">
				<span>MYBLOG</span>
				<img src="../res/img/logo.png" />
			</a>
		</h1>
		<div class="nav">
			<a href="index.html" class="active">首页</a>
			<a href="index.html" class="active">文章</a>
			<a href="about.html">关于</a>
		</div>
		<ul class="layui-nav header-down-nav">
			<li class="layui-nav-item"><a href="whisper.html">首页</a></li>
			<li class="layui-nav-item">
				<a href="index.html" class="active">文章</a>
			</li>
			<li class="layui-nav-item"><a href="about.html">关于</a></li>
		</ul>
		<p class="welcome-text">欢迎来到<span class="name">小名</span>的博客~</p>
	</div>
</template>

<style scoped>
div {
	font-size: 20px;
	color: black;
}
</style>
