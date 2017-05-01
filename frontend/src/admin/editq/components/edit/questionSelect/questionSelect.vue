<template>
	<section class="question_select">
		<ul>
			<li v-for="item of items" v-bind:class="item.iconClass" v-on:click="addQuestion(item.type)">{{ item.title }}</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'question-select',
		data () {
			return {
				items: [
					{ title: '文本问题', iconClass: 'text', type: 'text' },
					{ title: '分值问题', iconClass: 'goal', type: 'goal' },
					{ title: '单选问题', iconClass: 'radio', type: 'radio' },
					{ title: '多选问题', iconClass: 'multiple', type: 'checkbox' },
				]
			}
		},
		computed: {
			hasEditingQ () {
				return this.$store.state.questionNaire.hasEditingQ;
			}
		},
		methods: {
			addQuestion (type) {
				console.log('add a qustion', this.hasEditingQ)
				if(this.hasEditingQ) {
					/*this.$store.commit('QNAIRE_UPDATEQ', { 
						index: this.$store.state.questionNaire.index,
						question: this.$store.state.EQ.content,
					});
					this.$store.commit('QNAIRE_UNEDITQ', {
						index: this.$store.state.questionNaire.index,
					});*/
					alert('请保存之前的编辑')
					return ;
				}
				this.$store.commit('Q_INIT', { type });
				this.$store.commit('QNAIRE_ADDQ', { type })
			}
		},
		components: {}
	}
</script>

<style lang="scss">
	section.question_select {
		ul {
			list-style: none;
			padding: 0;
			li {
				position: relative;
				font-size: 14px;
				padding: 10px 0px 10px 40px;
				margin: 0;
				border-bottom: 1px solid #ccd1d9;

				&:before {
				  background-size: contain;
				  background-repeat: no-repeat;
					content: '';
			    width: 16px;
			    height: 16px;
			    display: block;
			    position: absolute;
			    left: 18px;
    			top: 12px;
				}

				&.text:before {
					background-image: url(../../../assets/text.svg);
				}

				&.radio:before {
					background-image: url(../../../assets/radio.svg);
				}

				&.multiple:before {
					background-image: url(../../../assets/multiple.svg);
				}

				&.goal:before {
					background-image: url(../../../assets/goal.svg);
				}
			}
		}
	}
</style>