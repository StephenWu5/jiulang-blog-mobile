<script lang="ts">
import { reactive } from "@vue/reactivity";
import { Popup, Grid, GridItem, List, Cell } from "vant";
export default {
	name: "Nav",
	components: {
		[Popup.name]: Popup,
		[Grid.name]: Grid,
		[GridItem.name]: GridItem,
        [List.name]: List,
        [Cell.name]: Cell,
	},
	setup() {
		const state = reactive({
			showPopUp: false,
            menuList: [
                {
                    name: '首页',
                    url: '/index',
                },
                 {
                    name: '我的文章',
                    url: '/article',
                }
            ]
		});
		// 显示进度条
		const showNavBar = () => {
			state.showPopUp = true;
		};
		// 跳转首页
		const gotoIndex = () => {};
        const onLoad = () => {};
		return {
			state,
			showNavBar,
			gotoIndex,
            onLoad,
		};
	},
};
</script>

<template>
	<div class="header">
		<van-popup
			v-model:show="state.showPopUp"
			position="left"
			:style="{ height: '100%', width: '40%' }"
		>
			<van-list
				:loading="false"
				:finished="true"
				finished-text=""
				@load="onLoad"
			>
				<van-cell v-for="(item, index) in state.menuList" :key="index" :title="item.name" />
			</van-list>
		</van-popup>
		<van-grid :border="false">
			<van-grid-item icon="smile" text="首页" @click="gotoIndex" />
			<van-grid-item icon="" text="" />
			<van-grid-item icon="" text="" />
			<van-grid-item icon="wap-nav" text="导航" @click="showNavBar" />
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
		<p class="welcome-text">欢迎来到<span class="name">豆腐的</span>的博客~</p>
	</div>
</template>

<style scoped>
div {
	font-size: 20px;
	color: black;
}
</style>
