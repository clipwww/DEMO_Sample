<template>
    <md-list class="md-triple-line">
        <md-list-item v-for="item in posts" style="border-bottom: 1px solid #ddd">
            <md-avatar >
                <a @click="openImg(item.imgBig)">
                    <img :src="item.imgSmall" :alt="item.no">
                </a>
            </md-avatar>

            <div class="md-list-text-container">
                <span>{{ item.title }}</span>
                <span class="info">{{ item.name + " " +item.id + " | " + item.date + "　" + item.time }}</span>
            </div>

            <md-button class="md-icon-button md-list-action">
                <a :href="['#/KomicaLive/Detail/' + item.no]">
                    <md-icon>zoom_in</md-icon>
                </a>
            </md-button>

            <md-list-expand>
                <md-list>
                    <md-list-item :id="item.no" class="replyClass">
                            <span v-html="item.text"></span>
                    </md-list-item>
                    <md-list-item v-for="reply in item.replyPost" :id="reply.no"
                        class="replyClass"
                        style="min-height: none;">
                            <md-avatar v-if="reply.imgSmall != null">
                            <a @click="openImg(reply.imgBig)">
                                <img :src="reply.imgSmall" :alt="reply.no">
                            </a>
                        </md-avatar>
                        <span>
                            <div class="info">{{ "ID：" + reply.no + " | " + reply.name + " " +reply.id }}</div>
                            <div v-html="reply.text"></div>
                            <div class="info">{{ reply.date + "  " + reply.time }}</div>
                        </span>
                    </md-list-item>
                </md-list>
            </md-list-expand>
            
        </md-list-item>

    </md-list>  
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    export default {
        props: {
            posts: Array
        },
        data() {
            return {

            }
        },
        methods: Object.assign({},
            mapActions([]), {
                openImg(img) {
                    this.$parent.openImg(img);
                }
            }
        )
    }
</script>

<style lang="scss">
    .replyClass {
        border-bottom: 1px solid #808080;
        span {
            white-space: normal;
            line-height: 1.5;
        }
        button {
            padding: 5px 10px !important;
            background-color: #EEDFF0 !important;
        }
    }
    
    .resquote {
        color: seagreen;
        font-size: 13px;
    }
    
    .info {
        font-size: 12px !important;
        color: lightslategray !important;
    }
</style>