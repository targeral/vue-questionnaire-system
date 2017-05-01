<template>
	<section id="caroursel_figure" class="row">
		<transition name="caroursel" mode="out-in">
			<component :is="currentView" class="caroursel"></component>
		</transition>
		<ul class="cfigure">
			<li v-on:click="changeCaroursel(_id)" v-for="_id of figures_id" v-bind:class="{ active: isActive(currentView, _id) }"></li>
		</ul>
	</section>
</template>

<script>
	import caroursel_1 from './caroursel_1';
	import caroursel_2 from './caroursel_2';
	import caroursel_3 from './caroursel_3';

	export default {
		name: 'caroursel-figure',
		data () {
			return {
				currentView: 'caroursel_1',
				figures_id: ['1', '2', '3'],
			}
		},
		methods: {
			changeCaroursel (_id) {
				this.currentView = `caroursel_${ _id }`;

			},

			isActive (current, myself) {
				return current === `caroursel_${ myself }`;
			}
		},
		components: {
			caroursel_1,
			caroursel_2,
			caroursel_3,			
		}
	}
</script>

<style lang="scss">
	#caroursel_figure {
		height: 300px;
		position: relative;
		
		.caroursel-enter-active, .caroursel-leave-active {
		  transition: opacity 0.3s;
		}
		.caroursel-enter, .caroursel-leave-active {
		  opacity: 0;
		}

		.caroursel {
			width: 100%;
			height: 100%;
		}
		ul.cfigure {
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			flex-wrap: nowrap;
			list-style: none;
			height: 10px;
	    width: 100px;
	    padding: 0;
	    position: absolute;
	    bottom: 5px;
	    left: 50%;
    	transform: translateX(-50%);

			li {
				width: 10px;
				height: 10px;
				border-radius: 50%;
				border: 1px solid rgba(255, 255, 255, 1);
				background-color: rgba(0, 0, 0, 0.1);
				cursor: pointer;

				&.active {
					background-color: rgba(255, 255, 255, 1);
					border: 1px solid rgba(0, 0, 0, 0.1);
				}
			}
		}
	}
</style>