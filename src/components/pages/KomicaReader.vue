<template>
    <div id="js-container" class="__container">

        <KomicaListItem :posts="posts"></KomicaListItem>
        <md-spinner id="js-loading" :md-size="50" v-show="isLoading" md-indeterminate style="display: block;margin: 30px auto;"></md-spinner>
        <infinite-loading :on-infinite="onInfinite" v-bind:distance="0" ref="infiniteLoading"></infinite-loading>
        <div v-show="isDone" style="text-align: center; padding: 30px 0;">
            No More Data =)
        </div>

        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <div @click="reLoadList">
                    <md-bottom-bar-item :class="{'md-active': true}" md-icon="autorenew">重新整理</md-bottom-bar-item>
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
                page: 0,
                image: '',
            }
        },
        created() {

        },
        methods: Object.assign({},
            mapActions(['fetchKomica', 'resetPosts', 'setIsDone']), {
                reLoadList() {
                    this.page = 0;
                    document.body.scrollTop = 0;
                    if (document.body.scrollTop === 0) {
                        this.fetchKomica({
                            where: 'Live',
                            page: this.page,
                        });
                        this.page++;
                    }
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                    this.resetPosts();
                    this.setIsDone(false);
                },
                openImg(img) {
                    this.image = img;
                    this.$refs['dialog1'].openDialog('dialog1');
                },
                closeImg() {
                    this.$refs['dialog1'].closeDialog('dialog1');
                    this.image = "";
                },
                onInfinite() {
                    console.log("infinite-load")
                    if (this.isDone) {
                        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                    } else {
                        this.fetchKomica({
                            where: 'Live',
                            page: this.page,
                        });
                        this.page++;
                    }
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                }
            }
        ),
        computed: Object.assign({},
            mapGetters({
                posts: 'getPosts',
                isLoading: 'getLoading',
                isDone: 'getIsDone',
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

</style>