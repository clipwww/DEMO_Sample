<template>
    <div class="container">

        <!--<md-spinner id="js-loading" :md-size="100" v-show="isLoading" md-indeterminate style="display: block;margin: 30px auto;"></md-spinner>-->

        <router-view></router-view>
        
        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <md-bottom-bar-item href="#/KomicaReader/Live" md-icon="autorenew">Live</md-bottom-bar-item>
                <md-bottom-bar-item href="#/KomicaReader/News" md-icon="list">News</md-bottom-bar-item>
            </md-bottom-bar>
        </ButtomBar>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import ButtomBar from '../layout/ButtomBar.vue';

    export default {
        components: {
            ButtomBar: ButtomBar
        },
        data() {
            return {

            }
        },
        created() {
            console.log("Index")
        },
        methods: Object.assign({},
            mapActions([]), {

            }
        ),
        computed: Object.assign({},
            mapGetters({}), {

            }
        )
    }
</script>