<template>
	<ul class="questionnaire-outline">
		<li v-for="(q, index) in questions">
			<span>{{ (index + 1) + ".  " + q.q.title }}</span>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'questionnaire-outline',
		data () {
			return {}
		},
		computed: {
			questions: function() {
				return this.$store.state.questionNaire.questions;
			},
		}
	}
</script>

<style lang="scss">
	ul.questionnaire-outline {
		list-style: none;
		padding: 10px;
	}
</style>