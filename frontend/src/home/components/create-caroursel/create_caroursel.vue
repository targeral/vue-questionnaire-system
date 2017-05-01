<template>
	<section class="create_caroursel row">
		<p><span>{{ people_number }}</span>个用户正在使用</p>
			<router-link class="btn btn-primary" to="/admin/create" tag="button">创建新问卷</router-link>
	</section>
</template>

<script>
	export default {
		name: 'create-caroursel',
		data () {
			return {
				people_number: 0,
			}
		}
	}
</script>

<style lang="scss">
	section.create_caroursel {
    padding: 30px 0;

		p {
			display: inline-block;
    	margin-left: 10px;
		}
		button {
			float: right;
    	margin-right: 10px;
		}
	}
</style>