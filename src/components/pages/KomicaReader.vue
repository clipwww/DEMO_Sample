<template>
    <div id="js-container" class="__container">

        <KomicaListItem :posts="posts" v-show="!isShowDetail">
            
        </KomicaListItem>
        <infinite-loading  v-show="!isShowDetail" :on-infinite="onInfinite" v-bind:distance="0" ref="infiniteLoading"></infinite-loading>
        
        <transition v-show="isShowDetail" name="fade" mode="out-in">
            <router-view class="view" ref="detail"></router-view>
        </transition>
        
        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <div @click="reLoadList" v-show="!isShowDetail">
                    <md-bottom-bar-item :class="{'md-active': !isShowDetail}" md-icon="autorenew">重新整理</md-bottom-bar-item>
                </div>
                <div @click="back" v-show="isShowDetail">
                    <md-bottom-bar-item :class="{'md-active': isShowDetail}" md-icon="keyboard_backspace">返回</md-bottom-bar-item>
                </div>
                <div @click="initDetail" v-show="isShowDetail">
                    <md-bottom-bar-item :class="{'md-active': isShowDetail}" md-icon="autorenew">重新整理</md-bottom-bar-item>
                </div>
                <div @click="goBottom" v-show="isShowDetail">
                    <md-bottom-bar-item :class="{'md-active': isShowDetail}" md-icon="vertical_align_bottom">至底</md-bottom-bar-item>
                </div>
                <div @click="goTop" v-show="isShowDetail">
                    <md-bottom-bar-item :class="{'md-active': isShowDetail}" md-icon="vertical_align_top">至頂</md-bottom-bar-item>
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
                <md-button class="md-primary" @click="closeImg">關閉</md-button>
            </div>
        </CustomModal>
    </div>
</template>

<style lang="scss">

</style>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import ButtomBar from '../layout/ButtomBar.vue';
    import CustomModal from '../item/CustomModal.vue';
    import KomicaListItem from '../item/KomicaListItem.vue';
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        components: {
            ButtomBar: ButtomBar,
            CustomModal: CustomModal,
            KomicaListItem: KomicaListItem,
            InfiniteLoading: InfiniteLoading
        },
        data() {
            return {
                page: 1,
                image: '',
            }
        },
        created() {

        },
        methods: Object.assign({},
            mapActions(['fetchKomica', 'resetPosts']), {
                initDetail() {
                    this.$refs.detail.initDetail();
                },
                reLoadList() {
                    this.page = 1;
                    document.body.scrollTop = 0;
                    this.resetPosts();
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
                onInfinite() {
                    if (!this.isShowDetail) {
                        this.fetchKomica({
                            where: 'Live',
                            page: this.page,
                        });
                        this.page++;
                        setTimeout(() => {
                            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                        }, 2000)
                    } else {
                        setTimeout(() => {
                            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                        }, 2000)
                    }
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

<style>
    .infinite-loading-container {
        width: 100%;
    }
</style>