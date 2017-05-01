<template>
	<div id="register-form" class="row"> 
		<section>
			<header>
				<h2>注册</h2>
			</header>
			<form class="form-group">
				<div class="form-row">
					<field v-model="username" type="text" label="账号" forid="userid" placeholder="请输入账号" :regexp="RegExpUserName"></field>
					<field v-model="password" type="password" :changeType="showPassWord" label="密码" forid="password" placeholder="请输入密码" :regexp="RegExpPassWord"></field>
				</div>
				<div class="form-row form-check">
					<input type="checkbox" id="showPassword" v-model="showPassWord" />
					<label for="showPassword">显示密码</label>
				</div>
				<div class="form-row text-center">
					<button type="button" class="btn btn-default btn-primary" v-on:click="register">提交</button>
					<button type="reset" class="btn btn-default">重置</button>
				</div>
			</form>
		</section>
	</div>
</template>

<script>
	import field from '../../../common/components/field/field';

	export default {
		name: 'register-form',
		data () {
			return {
				showPassWord: false,
				username: '',
				password: '',
			}
		},
		components: {
			field,
		},
		methods: {
			RegExpUserName (str) {
				return /^\w{1,20}$/.test(str);
			},
			RegExpPassWord (str) {
				return /^\w{6,20}$/.test(str)
			},
			register () {
				console.log(this.username, this.password);
			}
		}
	}
</script>

<style lang="scss">
	#register-form {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 50px;
	}
</style>