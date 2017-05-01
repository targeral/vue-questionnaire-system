<template>
	<section>
		<h1 class="hide">{{ title }}</h1>
		<home-nav></home-nav>
		<register-form></register-form>
	</section>
</template>

<script>
	import * as cpts from './components'

	export default {
		name: 'register',
		data () {
			return {
				title: 'register'
			}
		},
		components: cpts,
		created () {
			this.$store.dispatch('loadingStart');
		}				
	}
</script>

<style lang="scss">
	
</style>