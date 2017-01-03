<template>
  <div class="app-viewport">
    
    <NavBar></NavBar>

    <md-spinner :md-size="200" md-indeterminate v-if="isLoading" style="display: block;margin: 30px auto;"></md-spinner>
    <div class="main-container">
      <router-view></router-view>
    </div>

    <ButtomBar></ButtomBar>

  </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    import NavBar from './layout/NavBar.vue';
    import ButtomBar from './layout/ButtomBar.vue';
    export default {
        components: {
            NavBar: NavBar,
            ButtomBar: ButtomBar
        },
        data() {
            return {

            }
        },
        computed: mapGetters({
            isLoading: 'getLoading'
        }),
        methods: {

        }
    }
</script>

<style lang="scss">
    .app-viewport {
        padding-bottom: 56px;
        padding-top: 60px;
        max-width: 500px;
        margin: 0 auto;
        .container {
            padding: 15px;
        }
    }
</style>