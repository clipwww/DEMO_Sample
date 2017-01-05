<template>
    <div class="__container">

        <md-list class="md-triple-line" v-show="!isShowDetail">
            <md-list-item v-for="item in posts" style="border-bottom: 1px solid #ddd">
                <md-avatar >
                    <a @click="openImg(item.imgBig)">
                        <img :src="item.imgSmall" :alt="item.no">
                    </a>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>{{ item.title }}</span>
                    <span class="info">{{ item.name + " " +item.id + " | " + item.date + "　" + item.time }}</span>
                    <a :href="['#/KomicaLive/Detail/' + item.no]">
                        閱讀全部回覆
                    </a>
                </div>

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
        
        <transition v-show="isShowDetail" name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
        
        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <md-bottom-bar-item md-icon="autorenew">重新整理</md-bottom-bar-item>
            </md-bottom-bar>
        </ButtomBar>

        <CustomModal ref='dialog1'>
            <div slot="title">
               
            </div>
            <div slot="content">
                <img v-show="image != ''" :src="image" alt="bigImg" />
            </div>
            <div slot="actions">
                <md-button class="md-primary" @click="closeImg">關閉</md-button>
            </div>
        </CustomModal>
    </div>
</template>

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

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import ButtomBar from '../layout/ButtomBar.vue';
    import CustomModal from '../item/CustomModal.vue';

    export default {
        components: {
            ButtomBar: ButtomBar,
            CustomModal: CustomModal
        },
        data() {
            return {
                page: 1,
                image: '',
            }
        },
        created() {
            this.fetchKomica({
                where: 'Live',
            });
        },
        methods: Object.assign({},
            mapActions(['fetchKomica']), {
                openImg(img) {
                    this.image = img;
                    this.$refs['dialog1'].openDialog('dialog1');
                    this.$emit('openDialog');
                },
                closeImg() {
                    this.$refs['dialog1'].closeDialog('dialog1');
                    this.$emit('closeDialog');
                    this.image = "";
                }
            }
        ),
        computed: Object.assign({},
            mapGetters({
                posts: 'getPosts'
            }), {
                isShowDetail() {
                    return this.$route.path.match('Detail') != null;
                }
            }
        ),
        updated() {

        }
    }
</script>