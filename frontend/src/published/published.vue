<template>
	<section id="published">
		<h1 class="hide">{{ title }}</h1>
		<router-view></router-view>
	</section>
</template>

<script>
	export default {
		name: 'published',
		data () {
			return {
				title: 'published',
			}
		},
		methods: {
			loadStart () {
				this.$store.dispatch('loadingStart');
			}
		},
		created () {
			this.loadStart();
		},
		watch: {
			'$router': 'loadStart',
		}
	}
</script>

<style lang="scss"></style>