<template>
    <md-layout class="fixed-bottom">
        <slot name="content">
            Q
        </slot>
    </md-layout>
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