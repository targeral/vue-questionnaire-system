<template>
	<div class="row" id="questionnaire-control">
		<div class="col-md-3">
			<button type="button" class="btn btn-default btn-lg" v-on:click="onPreview">
				<span class="glyphicon glyphicon-search"></span>
				<span class="control-text">预览</span>
			</button>
		</div>
		<div class="col-md-3" v-if="questionnaire.state === 0">
			<button type="button" class="btn btn-default btn-lg" v-on:click="onEdit">
				<span class="glyphicon glyphicon-pencil"></span>
				<span class="control-text">编辑</span>
			</button>
		</div>
		<div class="col-md-3" v-if="questionnaire.state === 0">
			<button type="button" class="btn btn-default btn-lg" v-on:click="onPublish">
				<span class="glyphicon glyphicon-plane"></span>
				<span class="control-text">发布</span>
			</button>
		</div>
		<div class="col-md-3" v-if="questionnaire.state === 1">
			<button type="button" class="btn btn-default btn-lg" v-on:click="onEdit">
				<span class="glyphicon glyphicon-plane"></span>
				<span class="control-text">结束</span>
			</button>
		</div>
		<div class="col-md-3" v-if="questionnaire.state !== 0">
			<button type="button" class="btn btn-default btn-lg" v-on:click="onEdit">
				<span class="glyphicon glyphicon-plane"></span>
				<span class="control-text">统计</span>
			</button>
		</div>
		<div class="col-md-3" v-if="questionnaire.state === 2">
			<button type="button" class="btn btn-default btn-lg" v-on:click="onEdit">
				<span class="glyphicon glyphicon-plane"></span>
				<span class="control-text">导出</span>
			</button>
		</div>
		<div class="col-md-3">
			<button type="button" class="btn btn-default btn-lg" v-on:click="onDelete">
				<span class="glyphicon glyphicon-trash
"></span>
				<span class="control-text">删除</span>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'questionnaire-control',
		props: ['questionnaire'],
		data () {
			return {

			}
		},
		methods: {
			onPreview () {
				this.$emit('preview');
			},
			onPublish () {

			},
			onDelete () {

			},
			onEdit () {
				this.$emit('edit');
			}
		}
	}
</script>
<style lang="scss">
	#questionnaire-control {
		span.glyphicon {
		  display: block;
  		margin-bottom: 5px;
		}
	}
</style>