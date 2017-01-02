<template>
    <div class="container">
        <md-subheader style="font-size: 20px;">
            Log（？）
        </md-subheader>
        <md-divider></md-divider>
        <md-list>
            <md-list-item>
                <md-icon>note</md-icon> <span>2017/01/02 Init</span>
                <md-list-expand>
                    <md-list>
                        <md-list-item class="md-inset">練習：華氏攝氏轉換</md-list-item>
                        <md-list-item class="md-inset">練習：計數器 with Vuex</md-list-item>
                        <md-list-item class="md-inset">練習：ToDo List with Vuex</md-list-item>
                    </md-list>
                </md-list-expand>
            </md-list-item>
        </md-list>
        <md-card>
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
        </md-card>
    </div>
</template>

<script>
    import MyPic from '../images/akarinG.gif';
    export default {
        data() {
            return {
                MyPic: MyPic
            }
        },
        computed: {

        }
    }
</script>