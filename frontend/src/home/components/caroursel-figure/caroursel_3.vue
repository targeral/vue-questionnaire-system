<template>
	<section class="caroursel_3">
		<header>
			<h2>只是背景颜色不同<span>5.0</span></h2>
		</header>
		<p class="tip">因为我。。。懒</p>
	</section>
</template>

<script>
	export default {
		name: 'caroursel_3',
		data () {
			return {

			}
		}
	}
</script>

<style lang="scss">
	section.caroursel_3 {
		background-color: #f7b32b;
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
				    					  0px 0px 0px 10px #f7b32b,
				    					  0px 0px 0px 12px rgba(255, 255, 255, 0.6),
				    					  0px 0px 0px 20px #f7b32b,
				    					  0px 0px 0px 22px rgba(255, 255, 255, 0.4),
				    					  0px 0px 0px 30px #f7b32b;
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