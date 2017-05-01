<template>
	<section>
		<h1 class="hide">{{ title }}</h1>
		<home-nav></home-nav>
		<help-faq v-accordion></help-faq>
		<create-questionnaire v-accordion class="mt10"></create-questionnaire>
	</section>
</template>

<script>
	import * as cpts from './components'

	console.log(cpts)

	export default {
		name: 'help',
		data () {
			return {
				title: 'Help',
			}
		},
		components: cpts,
		created () {
			this.$store.dispatch('loadingStart');
		}
	}
</script>

<style lang="scss">
	.mt10 {
		margin-top: 10px;
	}
</style>