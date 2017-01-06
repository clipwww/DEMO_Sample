<template>
    <div class="__container">

        <md-spinner id="js-loading" :md-size="100" v-show="isLoading" md-indeterminate style="display: block;margin: 30px auto;"></md-spinner>

         <md-list class="md-triple-line" v-show="!isLoading" transition="fade">
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
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import ButtomBar from '../../layout/ButtomBar.vue';

    export default {
        components: {
            ButtomBar: ButtomBar,
        },
        data() {
            return {

            }
        },
        methods: Object.assign({},
            mapActions(['fetchKomica']), {
                initDetail() {
                    this.fetchKomica({
                        where: 'Live',
                        res: this.$route.params.id
                    });
                },
                openImg(img) {
                    this.$parent.openImg(img);
                },
                closeImg() {
                    this.$parent.$refs['dialog1'].closeDialog('dialog1');
                }
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