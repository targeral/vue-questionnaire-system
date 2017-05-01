<template>
	<section class="create-questionnaire">
		<header>
			<h2>创建问卷</h2>
		</header>
		<article>
			<img src="../../assets/questionnaire.svg" alt="">
			<p>问卷，共有三种创建问卷的方式让您来选择使用，创建空白问卷，选择问卷模板，文本编辑器。可根据自身的使用习惯，选择最合适的方式来快速创建一份问卷。</p>
		</article>
	</section>
</template>

<script>
	export default {
		name: 'create-questionnaire',
		data () {
			return {}
		}
	}
</script>

<style lang="scss">
	section.create-questionnaire {
		header {
			width: 100%;
			height: 30px;
			font-size: 15px;
			line-height: 2;
			background-color: #e4e7ed;
			border: 1px solid #ccd1d9;
			border-radius: 4px;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			padding-left: 5px;

			h2 {
				font-size: 14px;
				line-height: 2;
				padding: 0px;
				margin: 0px;
			}
		}
		article {
			width: 100%;
			padding: 10px;
			margin-top: -1px;
			border: 1px solid #ccd1d9;
			border-radius: 4px;
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			&.close {
				display: none;
			}

			img {
				margin: 0 auto;
		    display: block;
		    width: 250px;
		    padding: 50px;
		    background-color: #e4e7ed;
			}
		}
	}
</style>