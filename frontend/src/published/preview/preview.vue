<template>
	<section class="preview">
		<questionnaire :editable="editable"></questionnaire>
	</section>
</template>

<script>
	import questionnaire from '../../common/components/questionnaire/questionnaire'

	export default {
		name: 'preview',
		data () {
			return {
				editable: false,
			}
		},
		methods: {
			getQN () {
				let id = this.$route.params.id;
				this.$store.dispatch('loadingStart', true);
				this.$store.dispatch('getQuestionNaire', {
					id: id,
				});
			}
		},
		components: {
			questionnaire,
		},
		created () {
			this.getQN();
		},
	}
</script>