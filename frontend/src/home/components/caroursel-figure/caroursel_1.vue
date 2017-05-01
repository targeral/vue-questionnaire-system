<template>
	<section class="caroursel_1">
		<!-- <canvas id="canvas_caroursel_1" width="100%" height="100%">
			您的浏览器不支持canvas！
		</canvas> -->
		<header>
			<h2>全新不一样的<span>5.0</span></h2>
		</header>
		<p class="tip">免费简约的问卷系统</p>
	</section>
</template>

<script>
	export default {
		name: 'caroursel_1',
		data () {
			return {}
		}
	}
</script>

<style lang="scss">
	section.caroursel_1 {
		background-color: #3890ff;
		overflow: hidden;
    position: relative;

		header {
			position: absolute;
	    width: 80%;
	    top: 50%;
	    left: 50%;
	    display: flex;
	    flex-direction: row;
	    transform: translate(-50%, -50%);
	    flex-wrap: nowrap;
	    justify-content: space-around;
			h2{
				color: #fff;
				font-size: 35px;
				position: relative;

				span {
					margin-left: 50px;

					&:before {
						content: '';
						position: absolute;
						width: 55px;
						height: 55px;
						display: block;
						border-radius: 50%;
				    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 1),
				    					  0px 0px 0px 10px #3890ff,
				    					  0px 0px 0px 12px rgba(255, 255, 255, 0.6),
				    					  0px 0px 0px 20px #3890ff,
				    					  0px 0px 0px 22px rgba(255, 255, 255, 0.4),
				    					  0px 0px 0px 30px #3890ff;
				    right: -3px;
				    top: -7px;
					}
				}
			}
		}

		p.tip {
			margin-top: 250px;
    	text-align: center;
    	color: rgba(255, 255, 255, 0.9);
		}
	}
</style>