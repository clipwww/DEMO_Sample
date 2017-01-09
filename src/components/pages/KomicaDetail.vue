<template>
    <div id="js-container" class="__container">

         <md-list class="md-triple-line" v-show="!isLoading">
            <md-list-item style="border-bottom: 1px solid #ddd">
                <md-avatar >
                    <a @click="openImg(detail.imgBig)">
                        <img :src="detail.imgSmall" :alt="detail.no">
                    </a>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>{{ detail.title }}</span>
                    <span class="info">{{ detail.name + " " + detail.id + " | " + detail.date + "　" + detail.time }}</span>
                </div>
                
            </md-list-item>
            <md-list-item class="replyClass" style="min-height: none;">
                <span>
                    <div v-html="detail.text"></div>
                </span>
            </md-list-item>
            <md-list-item v-for="reply in detail.replyPost" :id="reply.no"
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
    
        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <div @click="back">
                    <md-bottom-bar-item :class="{'md-active': true}" md-icon="keyboard_backspace">{{ $t('Back') }}</md-bottom-bar-item>
                </div>
                <div @click="initDetail">
                    <md-bottom-bar-item :class="{'md-active': true}" md-icon="autorenew">{{ $t('Refresh') }}</md-bottom-bar-item>
                </div>
                <div @click="goBottom">
                    <md-bottom-bar-item :class="{'md-active': true}" md-icon="vertical_align_bottom">{{ $t('To_Bottom') }}</md-bottom-bar-item>
                </div>
                <div @click="goTop">
                    <md-bottom-bar-item :class="{'md-active': true}" md-icon="vertical_align_top">{{ $t('To_Top') }}</md-bottom-bar-item>
                </div>
            </md-bottom-bar>
        </ButtomBar>

        <CustomModal ref='dialog1'>
            <div slot="title">
               
            </div>
            <div slot="content">
                <img v-show="image != ''" :src="image" alt="bigImg" />
            </div>
            <div slot="actions">
                <md-button class="md-primary" @click="closeImg">{{ $t('Close') }}</md-button>
            </div>
        </CustomModal>
    </div>
</template>

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
            CustomModal: CustomModal,
        },
        data() {
            return {
                image: "",
            }
        },
        methods: Object.assign({},
            mapActions(['fetchKomica']), {
                initDetail() {
                    document.body.scrollTop = 0;
                    this.fetchKomica({
                        where: 'Live',
                        res: this.$route.params.id
                    });
                },
                openImg(img) {
                    this.image = img;
                    this.$refs['dialog1'].openDialog('dialog1');
                },
                closeImg() {
                    this.$refs['dialog1'].closeDialog('dialog1');
                    this.image = "";
                },
                back() {
                    location.href = "#/KomicaLive";
                },
                goBottom() {
                    document.body.scrollTop = document.getElementById('js-container').clientHeight;
                },
                goTop() {
                    document.body.scrollTop = 0;
                },
            }
        ),
        computed: Object.assign({},
            mapGetters({
                detail: 'getDetailPost',
                isLoading: 'getLoading'
            }), {

            }
        ),
        created() {
            this.initDetail();
        },
        watch: {

        }
    }
</script>