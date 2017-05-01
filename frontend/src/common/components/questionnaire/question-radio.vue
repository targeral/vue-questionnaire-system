<template>
	<section class="question-radio">
		<h4>单选题</h4>
		<section v-if="!editable">
			<p>{{ qmodel.q.title }}</p>
			<div v-for="option of qmodel.q.options" class="radio">
				<label>
					<input name="group" type="radio" :id="option.key" />
					 
					{{ option.value }}
				</label>
			</div>
		</section>
		<section v-if="editable && isEditing">
			<input type="text" placeholder="请输入问题" class="form-control" v-model="questionTitle" required>
			<div class="row pt-20" v-for="(option, i) in options">
				<div class="col-lg-10">
					<input type="text" placeholder="请填写选项" class="form-control" v-model="option.value">
				</div>
				<div class="col-lg-2 closex">
					<span v-if="options.length > 1" class="del-icon" @click="onDeleteOption(i)">X</span>
				</div>
			</div>
			<div class="btns mt-10">
				<button @click="onSave" class="btn btn-default">保存</button>
				<button @click="onAddOption" class="btn btn-default">添加选项</button>
				<button @click="onCancel" class="btn btn-default">取消</button>
			</div>
		</section>
		<section v-if="editable && !isEditing">
				<p>{{ qmodel.q.title }}</p>
				<div v-for="option of qmodel.q.options" class="radio disabled">
					<label>
						<input name="group" type="radio" :id="option.key" disabled="disabled" />
						 
						{{ option.value }}
					</label>
				</div>
				<div class="btns mt-10">
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
			qmodel: {
				type: Object,
			},
			editable: {
				type: Boolean,
				default: true,
			}
		},
		data () {
			return {
				options: [],
				oldOptions: [],
				key: 0,
			}
		},
		computed: {
			questionTitle: {
				get () {
					return this.$store.state.EQ.content.title;
				},

				set (value) {
					this.$store.commit('Q_UPDATE', {
						value: value, 
						key: 'title',
					});
				}
			},
			isEditing () {
				return this.qmodel.isEditing;
			}
		},
		created: function() {
			/*this.$store.commit('QRADIO_UPDATE', {
				value: this.question
			});*/
			//console.log(this.question)
			this.options = _.cloneDeep(this.qmodel.q.options);
			this.oldOptions = _.cloneDeep(this.qmodel.q.options);
			this.key = this.qmodel.q.key;
		},
		methods: {
			onEdit () {
				this.$emit('editQuestion');
			},
			onSave () {
				console.log('save', this.options)
				this.$store.commit('Q_UPDATE', {
					key: 'options',
					value: this.options,
				});
				this.$emit('saveQuestion', this.$store.state.EQ.content);
				this.$store.commit('Q_OVER');
				this.oldOptions = _.cloneDeep(this.qmodel.q.options);
			},
			onCancel () {
				this.$store.commit('Q_CANCEL');
				this.options = _.cloneDeep(this.oldOptions);
			},
			onDelete () {
				this.$emit('deleteQuestion');
			},
			onDeleteOption (index) {
				if(this.options.length <= 1) {
					return ;
				}
				this.options.splice(index, 1);
				console.log('delete a option')
			},
			onAddOption () {
				console.log(this.options, this.oldOptions)
				this.options.push({value: '', key: ++this.key});
				console.log('add a option')
			}
		}
	}
</script>

<style lang="scss">
	.question-radio {
		label {
			line-height: 2;
		}
		.closex {
			height: 43px;
    	padding-top: 16px;

    	span {
    		cursor: pointer;
    	}
		}
		.mt-10 {
			margin-top: 10px;
		}
	}
</style>