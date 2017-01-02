<template>
    <md-bottom-bar md-shift class="fixed-bottom">
        <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
    </md-bottom-bar>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        methods: {

        }
    };
</script>

<style>
    .fixed-bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9998;
    }
</style>