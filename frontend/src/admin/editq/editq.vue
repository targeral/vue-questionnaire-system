<template>
	<section id="create">
		<h1 class="hide">{{ title }}</h1>
		<app-nav></app-nav>
		<create-q></create-q>
	</section>
</template>

<script>
	import * as cpts from './components'

	export default {
		name: 'create',
		data () {
			return {
				title: 'Edit'
			}
		},
		components: cpts,
	}
</script>

<style lang="scss">
</style>