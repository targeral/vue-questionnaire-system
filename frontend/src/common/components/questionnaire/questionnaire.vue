<template>
	<section class="questionnaire">
		<header v-if="!editable">
			<h1>{{ questionTitle }}</h1>
			<h2>{{ questionWelcome }}</h2>
		</header>
		<div class="form-group" v-if="editable">
			<input type="text" class="form-control" :placeholder="questionnaire.Title" v-model="questionTitle">
		  	<input type="text" class="form-control" :placeholder="questionnaire.Welcome" v-model="questionWelcome">
		</div>
		<ul class="questions">
			<li v-for="(qmodel, index) in questions">
			<label>{{ index+1 | questionNumber}}</label>
			<component :is="qmodel.type" :qmodel="qmodel" v-on:deleteQuestion="deleteQuestion(index)" v-on:saveQuestion="saveQuestion($event, index)" v-on:editQuestion="editQuestion(index, qmodel)" :editable="editable"></component>
			</li>
		</ul>
		<div class="form-group" v-if="editable">
			<input type="text" class="form-control" :placeholder="questionnaire.Thanks" v-model="questionOver">
		</div>
		<footer v-if="!editable">{{ questionOver }}</footer>		
		<input type="button" class="btn btn-primary btn-block" :value="questionnaire.Submit" v-on:click="qSubmit">
	</section>
</template>

<script>
	import questionText from './question-text';
	import questionGoal from './question-goal'
	import questionRadio from './question-radio'

	export default {
		name: 'questionnaire',
		props: {
			editable: {
				type: Boolean,
				default: true,
			}
		},
		data () {
			return {
				questionnaire: {
					Title: '问卷标题',
					Welcome: '开头欢迎语',
					Thanks: '结尾感谢语',
					Submit: '提交',
				},
				isEditing: false,
			}
		},
		computed: {
			questions: function() {
				return this.$store.state.questionNaire.questions;
			},
			questionTitle: {
				get () {
					return this.$store.state.questionNaire.title;
				},

				set (value) {
					this.$store.commit('QNAIRE_UPDATE', {value: value, all: 'title'});
				}
			},
			questionWelcome: {
				get () {
					return this.$store.state.questionNaire.welcome;
				},

				set (value) {
					this.$store.commit('QNAIRE_UPDATE', {value: value, all: 'welcome'});
				}
			},
			questionOver: {
				get () {
					return this.$store.state.questionNaire.over;
				},

				set (value) {
					this.$store.commit('QNAIRE_UPDATE', {value: value, all: 'over'});
				}
			},
			hasEditingQ () {
				return this.$store.state.questionNaire.hasEditingQ;
			}
		},
		methods: {
			deleteQuestion (index) {
				this.$store.commit('QNAIRE_QDELETE', {index: index})
			},
			saveQuestion (question, index) {
				console.log('save', question, index);
				this.$store.commit('QNAIRE_UPDATEQ', { index, question });
				this.$store.commit('QNAIRE_UNEDITQ', { index });
			},
			editQuestion (index, qmodel) {
				//this.isEditing = true;
				if(this.hasEditingQ) {
					alert('请先保存之前的编辑');
					return ;
				}
				this.$store.commit('QNAIRE_EDITQ', { index })
				console.log(qmodel)
				this.$store.commit('Q_REEDIT', { question: qmodel.q })
			},
			qSubmit () {
				this.$store.dispatch('addQuestionNaire');
			},
			isEdit () {
				let path = this.$route.path;
				if(path.search('edit') !== -1) {
					console.log('edit state');
					this.questionnaire.Submit = `保存`;
				} else if(path.search('preview') !== -1) {
					this.questionnaire.Submit = '返回';
				}
			}
		},
		components: {
			questionText,
			questionGoal,
			questionRadio,
		},
		created () {
			console.log(this.editable)
			this.isEdit();
		}
	}
</script>

<style lang="scss">
	.questionnaire {
		background-color: #fff;
		padding: 5px 15px 15px;
		overflow: scroll;

		ul.questions {
			list-style: none;
			padding: 0;
			border-top: 1px solid #ccd1d9;

			&.isEditing {
				li:not(.editing):before {
					content: '';
					
				}
			}

			li {
				padding: 10px;
				margin-top: 5px;
				border-bottom: 1px solid #e4e7ed;

				label {
					font-size: 16px;
				}
			}
		}

		.question-block {
			border: 1px solid #ccc;
			padding: 5px;
		}

		input {
			margin-top: 10px;

			&[type=button] {
				width: 150px;
				margin: 0 auto;
			}
		}
	}
</style>