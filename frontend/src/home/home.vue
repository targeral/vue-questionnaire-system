<template>
	<section id="home">
	 	<h1 class="hide">{{ title }}</h1>
	 	<app-nav></app-nav>
	 	<caroursel-figure></caroursel-figure>
	 	<create-caroursel></create-caroursel>
 	</section>
</template>

<script>
import * as cpts from './components';

export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
    }
  },
  methods: {
    loadStart () {
      this.$store.dispatch('loadingStart');
    }
  },
  components: cpts,
  created () {
    this.loadStart();
  },
  watch: {
    '$route': 'loadStart'
  }
}
</script>

<style lang="scss">
</style>
