<template>
	<section id="center">
		<h1 class="hide">{{ title }}</h1>
		<app-nav></app-nav>
		<div class="row center-contianer">
			<div class="col-lg-7">
				<div class="panel-heading">问卷列表</div>
				<div class="list-group">
					<a class="list-group-item questionnaire-item" v-for="(item, i) in questionnaires" v-on:click="onSelect(item, i)" :class="{active: item === selectedQuestionnaire}">
						<questionnaire-item :questionnaire="item"></questionnaire-item>
					</a>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="panel panel-default">
					<div class="panel-heading">问卷详情</div>
					<div class="panel-body">
						<questionnaire-detail :questionnaire="selectedQuestionnaire"></questionnaire-detail>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
						问卷管理
					</div>
					<div class="panel-body">
						<questionnaire-control :questionnaire="selectedQuestionnaire" v-on:edit="onEdit" v-on:preview="onPreview"></questionnaire-control>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import * as cpts from './components';

	export default {
		name: 'center',
		data () {
			return {
				title: 'center',
				selectedIndex: 0,
			}
		},
		methods: {
			loadStart () {
				this.$store.dispatch('loadingStart', true);
			},
			getQuestionnaires() {
				this.$store.dispatch('getQuestionnaires');
			},
			onSelect (item, index) {
				this.$store.commit('QN_SELECT', {index: index});
				this.selectedIndex = index;
			},
			onEdit () {
				this.$router.push({ path: `/admin/edit/${ this.$store.state.selectedQuestionnaire.id }`})
			},
			onPreview () {
				console.log('preview')
				this.$router.push({
					path: `/published/preview/${ this.$store.state.selectedQuestionnaire.id}`
				})
			}
		},
		computed: {
			questionnaires: function() {
				return this.$store.state.questionnaires;
			},
			selectedQuestionnaire: function() {
				return this.$store.state.selectedQuestionnaire;
			}
		},
		components: cpts,
		created () {
			this.loadStart();
			this.getQuestionnaires();
		},
		watch: {
			'$route': 'loadStart'
		}
	}
</script>

<style lang="scss">
	#center {
		.panel-heading {
			background-color: #e4e7ed;
		}
	}
</style>