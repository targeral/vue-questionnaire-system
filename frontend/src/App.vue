<template>
  <div id="app" class="container-fluid">
    <transition name="fade">
      <app-load v-show="load" :start="loadstart"></app-load>
    </transition>
    <transition name="fade">
      <router-view v-show="!load"></router-view>
    </transition>
  </div>
</template>

<script>
import appLoad from './common/components/app-load/load'
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    initLoadState () {
      this.$store.commit('LOADING_INITSTATE');
    }
  },
  computed: {
    load: function() {
      return this.$store.getters.loadingState;
    }
  },
  created () {
    this.loadstart = true;
  },
  components: {
    appLoad,
  },
  watch: {
    '$route': 'initLoadState',
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
