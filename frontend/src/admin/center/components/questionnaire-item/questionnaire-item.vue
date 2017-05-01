<template>
	<section>{{ questionnaire.title }} <span class="label" :class="stateClass">{{ stateText }}</span><span class="pull-right">{{ questionnaire.createDate }}</span></section>
</template>

<script>
	export default {
		name: 'questionnaire-item',
		props: ['questionnaire'],
		data () {
			return {
			}
		},
		computed: {
			stateText: function() {
				let stateText = '';
				console.log('adfadf',this.questionnaire)
				switch (this.questionnaire.state) {
					case 0:
						stateText = `已创建`;
						break;
					case 1:
						stateText = `回收中`;
					case 2: 
						stateText = `已结束`;
					default:
						break;
				}

				return stateText;
			},
			stateClass: function() {
				let stateClass = '';
				switch (this.questionnaire.state) {
					case 0:
						stateClass = 'label-warning';
						break;
					case 1:
						stateClass = 'label-info';
					case 2: 
						stateClass = 'label-success';
					default:
						break;
				}

				return stateClass;
			}
		},
		methods: {
			setState () {
				switch (this.questionnaire.state) {
					case 'created':
						this.stateText = `已创建`;
						this.stateClass = 'label-warning';
						break;
					case 'published':
						this.stateText = `回收中`;
						this.stateClass = 'label-info';
					case 'finished': 
						this.stateText = `已结束`;
						this.stateClass = 'label-success';
					default:
						break;
				}
			}
		},
		created () {
			//this.setState();
		},
	}
</script>