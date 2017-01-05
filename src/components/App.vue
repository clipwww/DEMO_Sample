<template>
  <div class="app-viewport">
    
    <NavBar></NavBar>

    <div class="main-container">
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
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

        },
        watch: {
            '$route' (to, from) {

            }
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
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s ease;
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>