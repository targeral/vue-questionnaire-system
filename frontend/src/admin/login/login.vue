<template>
	<section class="login">
		<form class="col-md-4">
			<div class="form-group">
				<input class="form-control" type="text" placeholder="输入账号">
				<input class="form-control" type="password" placeholder="输入密码">
			</div>
			<div class="form-group">
				<input class="btn btn-primary btn-block" type="button" value="登入">
			</div>
		</form>
	</section>	
</template>

<script>
	export default {
		name: 'login',
		data () {
			return {

			}
		},
		created () {
			this.$store.dispatch('loadingStart');
		}		
	}
</script>

<style lang="scss">
	.login {
		form {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>