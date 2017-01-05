<template>
    <div class="__container">

        <md-spinner id="js-loading" :md-size="100" v-show="isLoading" md-indeterminate style="display: block;margin: 30px auto;"></md-spinner>

         <md-list class="md-triple-line" v-show="!isLoading">
            <md-list-item style="border-bottom: 1px solid #ddd">
                <md-avatar >
                    <a @click="openImg(datial.imgBig)">
                        <img :src="datial.imgSmall" :alt="datial.no">
                    </a>
                </md-avatar>

                <div class="md-list-text-container">
                    <span>{{ datial.title }}</span>
                    <span class="info">{{ datial.name + " " + datial.id + " | " + datial.date + "　" + datial.time }}</span>
                </div>
                
            </md-list-item>
            <md-list-item v-for="reply in datial.replyPost" :id="reply.no"
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
                datial: 'getDetailPost',
                isLoading: 'getLoading'
            }), {

            }
        ),
        created() {
            var test = this.$route.params.id;
            this.fetchKomica({
                where: 'Live',
                res: test
            });
        },
        watch: {

        }
    }
</script>