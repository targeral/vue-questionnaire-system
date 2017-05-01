<template>
	<section class="row" id="edit">
		<section class="q_feature col-md-3">
			<nav>
				<ul class="nav nav-tabs">
					<li role="presentation" v-bind:class="{active: item.active}" v-for="item of items"><a href v-on:click.prevent="switchTab(item.view)">{{ item.title }}</a></li>
				</ul>
			</nav>
			<component :is="currentView"></component>
		</section>
		<section class="q_edit col-md-9">
			<question-naire></question-naire>
		</section>
	</section>
</template>

<script>
	import questionSelect from './questionSelect/questionSelect'
	import questionNaire from '../../../../common/components/questionnaire/questionnaire'
	import questionnaireOutline from './questionnaireOutline/questionnaireOutline'

	export default {
		name: 'edit',
		data () {
			return {
				items: [
					{ title: '问题控件', view: 'questionSelect', active: true},
					{ title: '问卷大纲', view: 'questionnaireOutline', active: false},
				],
				currentView: 'questionSelect',
			}
		},
		watch: {
			'$route': 'isEdit',
		},
		methods: {
			switchTab (view) {
				console.log(this.currentView, view)
				if(this.currentView === view) return ;
				this.items.forEach((item) => {
					item.active = !item.active;
				});
				this.currentView = view;
				console.log(this.currentView)
			},
			isEdit() {
				let path = this.$route.path;
				if(path.search('create') !== -1) {
					console.log('create state');
					this.$store.dispatch('loadingStart');
				} else if(path.search('edit') !== -1) {
					let id = this.$route.params.id;
					console.log(this.$route)
					console.log('edit state');
					this.$store.dispatch('loadingStart', true);
					this.$store.dispatch('getQuestionNaire', {
						id: id,
					});
				}
			},
		},
		components: {
			questionSelect,
			questionNaire,
			questionnaireOutline,
		},
		created () {
			this.isEdit();
			//this.doLoading();
		}
	}
</script>

<style lang="scss">
	#edit {
		margin: 0 -13px 2px;
		border: 2px solid #1f2126;
		border-radius: 4px;
		.q_feature {
			nav {
				margin-top: 30px;
			}
		}
		.q_edit {
			background-color: #e4e7ed;
			height: calc(100vh - 52px);
			padding: 10px;
			overflow-y: scroll;
		}
	}
	.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>