<template>
	<nav class="row" id="nav">
		<ul class="route nav navbar-nav">
			<li v-for="route of routes">
				<router-link v-bind:to="route.link">{{ route.title }}</router-link>
			</li>
		</ul>
		<ul class="feature nav navbar-nav">
			<li v-for="feature of features">
				<router-link v-bind:to="feature.link">
					{{ feature.title }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'app-nav',
		data () {
			return {
				routes: [
					{title: '首页', link: '/'},
					{title: '我的问卷', link: '/admin/center'},
					{title: '帮助', link: '/admin/help'},
				],
				features: [
					{	title: '创建新问卷', link: '/admin/create' },
					{	title: '注册', link: '/admin/register' },
					{	title: '登录', link: '/admin/login' },
				]
			}
		}
	}
</script>

<style lang="scss">
	#nav {
		.feature {
			float: right;
		}
	}
</style>