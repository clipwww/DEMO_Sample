<template>
    <div class="container">
        <br/>
        <md-card style="margin-bottom: 15px" v-if="recommend.inventory > 0">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ recommend.title }}</div>
                    <div class="md-subhead">$ {{ recommend.price }}</div>
                </md-card-header-text>

                <md-card-media>
                    <img :src="recommend.image" :alt="recommend.title">
                </md-card-media>
            </md-card-header>

            <md-card-actions style="justify-content: flex-start">
                <md-button class="md-raised md-accent" @click="addCart( recommend.id )">加購</md-button>
            </md-card-actions>
        </md-card>

        <md-table-card>
            <md-toolbar>
                <h1 class="md-title">總計：${{ total }}元</h1>
            </md-toolbar>
            <md-table>
                <md-table-header>
                    <md-table-row>
                        <md-table-head>餐點</md-table-head>
                        <md-table-head md-numeric>價格</md-table-head>
                        <md-table-head md-numeric>取消</md-table-head>
                    </md-table-row>
                </md-table-header>

                <md-table-body>
                    <md-table-row v-for="(item, index) in cartList" :key="index" >
                        <md-table-cell>{{ item.title }}</md-table-cell>
                        <md-table-cell>{{ item.price }}</md-table-cell>
                        <md-table-cell>
                            <md-button class="md-icon-button" @click="cancelCart( item.id )">
                                <md-icon>delete</md-icon>
                            </md-button>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
            </md-table>
        </md-table-card>
        <md-layout>
            <md-button class="md-raised md-primary">
                結帳
            </md-button>
        </md-layout>

        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <md-bottom-bar-item href="#/Shop" md-icon="add_shopping_cart" md-active>返回購物頁面</md-bottom-bar-item>
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
        computed: mapGetters({
            total: 'getCartPriceTotal',
            recommend: 'getRecommendedProducts',
            cartList: 'getShoppingCart',
        }),
        methods: mapActions([
            'cancelCart',
            'addCart',
        ]),
        created() {

        },
        watch: {

        }
    }
</script>