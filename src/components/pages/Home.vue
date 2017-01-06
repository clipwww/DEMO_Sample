<template>
    <div class="container">
        <br/>
        <md-subheader style="font-size: 20px;">
            Log
        </md-subheader>
        <md-divider></md-divider>
        <md-list>
            <md-list-item v-for="item in log">
                <md-icon>note</md-icon> <span>{{ item.title }}</span>
                <md-list-expand>
                    <md-list>
                        <md-list-item v-for="text in item.list" class="md-inset">
                            <div style="white-space: normal;color:#808080">{{ text }}</div>
                        </md-list-item>
                    </md-list>
                </md-list-expand>
            </md-list-item>
        </md-list>
        <!--<md-card>
            <md-card-media>
                <img :src="MyPic" alt="MyPic">
            </md-card-media>

            <md-card-header>
                <div class="md-title">＼ｱｯｶﾘ～ﾝ／</div>
                <div class="md-subhead">あかりちゃんマジ天使</div>
            </md-card-header>

            <md-card-actions>
                <md-button class="md-icon-button">
                    <md-icon>favorite</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>share</md-icon>
                </md-button>
            </md-card-actions>

            <md-card-content>

            </md-card-content>
        </md-card>-->
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    import MyPic from '../../images/akarinG.gif';

    export default {
        data() {
            return {
                MyPic: MyPic
            }
        },
        methods: mapActions([]),
        computed: mapGetters({
            log: 'getLog',
        }),
        created() {

        }
    }
</script>