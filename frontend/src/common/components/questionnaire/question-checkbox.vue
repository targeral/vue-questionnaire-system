<template>
	<section class="question-radio">
		<h4>多选题</h4>
		<section v-if="!editable">
			<p>{{ questionTitle }}</p>
		</section>
		<section v-if="editable && isEditing">
			<input type="text" placeholder="请输入问题" class="form-control" v-model="questionTitle" required>
			<div class="row pt-20" v-for="(option, i) in options">
				<div class="col-lg-10">
					<input type="text" placeholder="请填写选项" class="form-control" v-model="option.value">
				</div>
				<div class="col-lg-2">
					<span v-if="options.length > 1" class="del-icon" @click="onDeleteOption(i)">X</span>
				</div>
			</div>
			<div class="btns">
				<button @click="onSave" class="btn btn-default">保存</button>
				<button @click="onAddOption" class="btn btn-default">添加选项</button>
				<button @click="onCancel" class="btn btn-default">取消</button>
			</div>
		</section>
		<section v-if="editable && !isEditing">
				<p>{{ questionTitle }}</p>
				<div v-for="option of options" class="radio disabled">
					<label>
						<input name="group" type="radio" :id="option.key" disabled="disabled" />
						{{ option.value }}
					</label>
				</div>
				<div class="btns">
					<button class="btn btn-default" v-on:click="onEdit">编辑</button>
				<button class="btn btn-default" v-on:click="onDelete">删除</button>
				</div>
			</section>
	</section>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'question-radio',
		props: {
			question: {
				type: Object,
				default: () => {
					return {
						title: '',
						options: [
							{ key: 1, value: ''}
						],
						key: 1,
					}
				}
			},
			editable: {
				type: Boolean,
				default: false,
			}
		},
		data () {
			return {
				options: [],
				key: 0,
			}
		},
		computed: {
			questionTitle: {
				get () {
					return this.$store.state.questionRadio.question.title;
				},

				set (value) {
					this.$store.commit('QRADIO_UPDATE', {value: value, all: 'title'});
				}
			},
			isEditing () {
				return this.$store.state.questionRadio.isEditing;
			}
		},
		created: function() {
			this.$store.commit('QRADIO_UPDATE', {
				value: this.question
			});
			console.log(this.question)
			this.options = _.cloneDeep(this.question.options);
			this.key = this.question.key;
		},
		methods: {
			onEdit () {
				//this.isEditing = true;
				this.$store.commit('QRADIO_EDIT');
			},
			onSave () {
				/*this.copyQuestion();
				this.isEditing = false;*/
				this.$store.commit('QRADIO_SAVE', {options: this.options});
				this.$store.commit('QRADIO_UNEDIT')
			},
			onCancel () {
				/*this.question = this.copy(this.backupQuestion);*/
				//this.isEditing = false;
				this.$store.commit('QRADIO_CANCEL');
				console.log('cancel', this.options, this.question.options)
				this.options = _.cloneDeep(this.$store.state.questionRadio.oldQuestion.options);
				this.$store.commit('QRADIO_UNEDIT');
			},
			onDelete () {
				this.$emit('deleteQuestion');
			},
			onDeleteOption (index) {
				if(this.options.length <= 1) {
					return ;
				}
				this.options.splice(index, 1);
			},
			onAddOption () {
				console.log(this.options)
				this.options.push({value: '', key: ++this.key});
			}
		}
	}
</script>

<style lang="scss">
	
</style>