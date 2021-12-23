<script lang="ts">
export default {
	name: "Nav",
	setup() {
		return {};
	},
};
</script>

<template>
	<div class="header">
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
		<p class="welcome-text">欢迎来到<span class="name">小明</span>的博客~</p>
	</div>
</template>

<style scoped>
div {
	font-size: 20px;
	color: black;
}
</style>
