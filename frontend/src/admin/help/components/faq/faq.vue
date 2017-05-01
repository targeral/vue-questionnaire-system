<template>
	<section class="faq">
		<header>
			<h2>常见FAQ</h2>
		</header>
		<article>
			<img src="../../assets/FAQ.svg" alt="faq">
			<p>使用问卷收集数据的基本流程：创建问卷，编辑问卷，设置问卷，预览问卷，回收问卷，数据分析等几个步骤。问卷提供三种创建问卷的方式，创建空白问卷，选择问卷模板，文本编辑器。以灵活设置问卷的显示，回收条件，在线实时统计回收结果，并可以导出Excel和SPSS数据。详细操作指引请参照帮助中心“ 操作指导 ”部分。</p>
		</article>
	</section>
</template>

<script>
	export default {
		name: 'help-faq',
		data () {
			return {}
		}
	}
</script>

<style lang="scss">
	section.faq {
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