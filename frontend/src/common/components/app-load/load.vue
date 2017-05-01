<template>
	<section id="load" class="row">
		<ul>
			<li v-for="item of items">{{ item }}</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'app-load',
		props: {
			start: {
				type: Boolean,
				default: false,
			}
		},
		data () {
			return {
			}
		},
		computed: {
		  now: function () {
		    return Date.now()
		  },
		  items () {
		  	return this.$store.state.loading.points;
		  }
		},
		methods: {
			startLoad () {
				this.$store.dispatch('loadingStart');
			},
		}
	}
</script>

<style lang="scss">
	#load {
		height: 100vh;
    background: rgba(254, 237, 109, 1);
    position: relative;

		ul {
			margin: 0;
	    padding: 0;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
	    min-width: 50%;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    justify-content: space-between;
	    align-content: center;
	    list-style: none;

	    li {
				font-size: 80px;
				font-weight: bold;
	    }
		}
	}
</style>