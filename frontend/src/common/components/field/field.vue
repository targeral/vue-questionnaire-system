<template>
	<div class="form-group">
    <label for="forid">{{ label }}</label>
    <input type="text" ref="input" :value="value" v-on:input="updateValue($event.target.value)" class="hide" />
    <input v-show="type === 'text' || changeType" type="text" class="form-control" id="forid" placeholder="placeholder" :value="value" v-model="textContent" v-on:change="changeAlertState">
    <input v-show="!changeType && type === 'password'" type="password" class="form-control" id="forid" placeholder="placeholder" v-model="textContent" v-on:change="changeAlertState">
		<span class="label" :class="status.class">{{ status.label }}</span>
  </div>
</template>

<script>
	export default {
		name: 'field',
		props: {
			label: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				default: 'text'
			},
			changeType: {
				type: Boolean,
				default: false,
			},
			forid: {
				type: String
			},
			placeholder: {
				type: String,
			},
			regexp: {
				type: Function,
				default: function(){return true}
			},
			resetabel: {
				type: Boolean,
				default: false,
			},
			value: {
				type: String,
				default: '',
			}
		},
		data () {
			return {
				textContent: '',
				status: {
					class: 'label-primary',
					label: `请输入${ this.label }`,
				}
			}
		},
		watch: {
			resetabel (newVal) {
				if(newVal) {
					this.value = '';
					this.changeAlertState();
					this.resetabel = false;
				}
			}
		},
		methods: {
			changeAlertState() {
				if(this.value === '') {
					this.status.class = 'label-primary';
					this.status.label = `请输入${ this.label }`;
				} else if(this.regexp(this.value)) {
					this.status.class = 'label-sucess';
					this.status.label = '✔️';
				} else if(!this.regexp(this.value)) {
					this.status.class = 'label-danger';
					this.status.label = '✘';
				} else {
					this.status.class = '';
					this.status.label = '';
				}
				this.updateValue(this.textContent);
			},
			updateValue (value) {
				this.$refs.input.value = value;
				this.$emit('input', value);
			}
		}
	}
</script>