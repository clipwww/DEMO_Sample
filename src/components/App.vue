<template>
  <div class="app-viewport">
    
    <NavBar></NavBar>

    <md-spinner :md-size="200" md-indeterminate v-if="isLoading" style="display: block;margin: 30px auto;"></md-spinner>
    <div class="main-container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    import NavBar from './layout/NavBar.vue';

    export default {
        components: {
            NavBar: NavBar,
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
        padding-top: 75px;
        max-width: 500px;
        margin: 0 auto;
        .container {
            padding: 0 15px;
        }
    }
</style>