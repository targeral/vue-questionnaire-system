<template>
	<section class="question-goal">
		<h4>分值题</h4>
		<section v-if="!editable">
			<p>{{ preview.title }}</p>
			<p class="range-filed">
				<label>分值：{{ preview.goal }}</label>
				<input type="range" v-model="preview.goal" min="0" max="100" />
			</p>
		</section>
		<section v-if="editable && isEditing">
			<input type="text" placeholder="请输入问题" class="form-control" v-model="questionTitle" required>
			<div class="btns">
				<button class="btn" v-on:click="onSave">保存</button>
				<button class="btn" v-on:click="onCancel">取消</button>
			</div>
		</section>
		<section v-if="editable && !isEditing">
			<p>{{ qmodel.q.title }}</p>
			<p class="range-field">
				<label>分值：50</label>
				<input type="range" value="50" min="0" max="100" disabled="disabled">
			</p>
			<div class="btns">
				<button class="btn btn-default" v-on:click="onEdit">编辑</button>
				<button class="btn btn-default" v-on:click="onDelete">删除</button>
			</div>
		</section>
	</section>
</template>

<script>
	export default {
		name: 'question-goal',
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
					this.$store.commit('Q_UPDATE', {
						key: 'title',
						value: value,
					});
				}
			},
			questionGoal: {
				get () {
					return this.$store.state.EQ.content.goal;
				},
				set (value) {
					this.$store.commit('Q_UPDATE', {
						value: value, 
						key: 'goal'
					})
				}
			},
			isEditing () {
				return this.qmodel.isEditing;
			}

		},
		created () {
		},
		data () {
			return {
				preview: {
					title: '',
					goal: 50,
				}
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
			}
		},
		created () {
			if(this.$route.path.search('preview') !== 1) {
				this.preview.title = this.qmodel.q.title;
				this.preview.goal = this.qmodel.q.goal;
			}
		}
	}
</script>

<style lang="scss">
	.question-goal {
		input {
			margin-bottom: 10px;
		}
	}
</style>