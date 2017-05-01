<template>
	<section class="question-text">
		<h4>问答题</h4>
		<!-- v-if="!editable" -->
		<section v-if="!editable">
			<p>{{ qmodel.q.title }}</p>
			<input type="text" placeholder="请输入问题的答案" class="form-control">
		</section>
		<!-- v-if="editable && isEditing" -->
		<section v-if="editable && isEditing">
			<input type="text" placeholder="请输入问题" class="form-control" v-model="questionTitle" required>
			<div class="btns">
				<button class="btn" v-on:click="onSave">保存</button>
				<button class="btn" v-on:click="onCancel">取消</button>
			</div>
		</section>
<!-- v-if="editable && !isEditing" -->
		<section v-if="editable && !isEditing" >
			<p>{{ qmodel.q.title }}</p>
			<input type="text" placeholder="请输入问题的答案" class="form-control" disabled="disabled" />
			<div class="btns">
				<button class="btn btn-default" v-on:click="onEdit">编辑</button>
				<button class="btn btn-default" v-on:click="onDelete">删除</button>
			</div>
		</section>
	</section>
</template>

<script>
	import * as _ from 'lodash';

	export default {
		name: 'question-text',
		props: {
			qmodel: {
				type: Object,
			},
			editable: {
				type: Boolean,
				default: true,
			}
		},
		computed: {
			questionTitle: {
				get () {
					return this.$store.state.EQ.content.title;
				},

				set (value) {
					this.$store.commit('Q_UPDATE', {key: 'title', value: value});
				}
			},
			questionAnswer: {
				get () {
					return this.$store.state.EQ.content.answer;
				},
				set (value) {
					this.$store.commit('Q_UPDATE', {key: 'answer', value: value});
				}
			},
			isEditing () {
				return this.qmodel.isEditing;
			}
		},
		created () {
			//this.$store.commit('QTEXT_UPDATE', {value: this.question})
		},
		data () {
			return {
				//isEditing: false,
			}
		},
		methods: {
			onEdit () {
				this.$emit('editQuestion');
			},
			onSave () {
				this.$emit('saveQuestion', this.$store.state.EQ.content);
				this.$store.commit('Q_OVER');
			},
			onCancel () {
				this.$store.commit('Q_CANCEL');
			},
			onDelete () {
				this.$emit('deleteQuestion');
			},
		}
	}
</script>

<style lang="scss">
	.question-text {
		input {
			margin-bottom: 10px;
		}
	}
</style>