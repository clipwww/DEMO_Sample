<template>
  <div class="app-viewport">

    <NavBar></NavBar>

    <div class="main-container">
      <router-view></router-view>
    </div>

    <ButtomBar></ButtomBar>

  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import ButtomBar from './components/ButtomBar.vue';
    export default {
        components: {
            NavBar: NavBar,
            ButtomBar: ButtomBar
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
    .app-viewport {
        padding-bottom: 56px;
        padding-top: 60px;
        max-width: 500px;
        margin: 0 auto;
    }
</style>