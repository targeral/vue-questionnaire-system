<template>
	<table v-if="questionnaire" class="table">
		<tbody>
		<tr>
			<td>问题标题</td>
			<td>{{ questionnaire.title}}</td>
		</tr>
		<tr>
			<td>问题简介</td>
			<td>{{questionnaire.welcome}}</td>
		</tr>
		<tr>
			<td>问题总数：</td>
			<td>{{ qlength }}</td>
		</tr>
		<tr>
			<td>创建时间：</td>
			<td>{{ questionnaire.createDate }}</td>
		</tr>
		<tr v-if="questionnaire.state === 1">
			<td colspan="2">
				<router-link v-bind:to="link"></router-link>
			</td>
		</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		name: 'questionnaire-detail',
		props: ['questionnaire'],
		data () {
			return {
				link: `/published${ this.questionnaire.id }`,
			}
		},
		computed: {
			qlength: function() {
				console.log(this.questionnaire)
				return this.questionnaire.questions ? this.questionnaire.questions.length : 0;
			}
		}
	}
</script>
<style lang="scss">
	
</style>