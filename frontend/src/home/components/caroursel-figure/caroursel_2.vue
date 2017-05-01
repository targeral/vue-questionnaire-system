<template>
	<section class="caroursel_2">
		<header>
			<h2>对，就是不一样的<span>5.0</span></h2>
		</header>
		<p class="tip">免费简约的问卷系统</p>
	</section>
</template>

<script>
	export default {
		name: 'caroursel_2',
		data () {
			return {

			}
		}
	}
</script>

<style lang="scss">
	section.caroursel_2 {
		background-color: #22c36a;
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
				    					  0px 0px 0px 10px #22c36a,
				    					  0px 0px 0px 12px rgba(255, 255, 255, 0.6),
				    					  0px 0px 0px 20px #22c36a,
				    					  0px 0px 0px 22px rgba(255, 255, 255, 0.4),
				    					  0px 0px 0px 30px #22c36a;
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