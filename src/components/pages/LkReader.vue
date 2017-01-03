<template>
    <div class="container">

        <md-list class="md-double-line" v-show="!isShowDetail">
            <md-list-item v-for="item in Comics">
                <router-link :to="item.href">
                    <div class="md-list-text-container">
                        <span>{{ item.title }}</span>
                        <span>{{ item.num }}</span>
                    </div>
                    <md-divider></md-divider>
                    <md-icon>more_vert</md-icon>
                </router-link>
            </md-list-item>
        </md-list>

        <router-view v-show="isShowDetail"></router-view>
        
        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <md-bottom-bar-item md-icon="autorenew" :class="{'md-active': !isShowDetail }" v-show="!isShowDetail">重新整理</md-bottom-bar-item>
                <md-bottom-bar-item href="#/LkReader" :class="{'md-active': isShowDetail }" md-icon="list" v-show="isShowDetail">列表</md-bottom-bar-item>
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
            this.$store.dispatch('fetchLkComics');
        },
        methods: {

        },
        computed: Object.assign({},
            mapGetters({
                Comics: 'getComics'
            }), {
                isShowDetail() {
                    return this.$route.path.match('Detail') != null;
                }
            }
        )
    }
</script>