<template>
    <div class="container">
        <ProductItem v-for="(item, index) in foodList" :item="item"></ProductItem>

        <ButtomBar>
            <md-bottom-bar md-shift slot="content">
                <md-bottom-bar-item href="#/Cart" md-icon="shopping_cart" md-active>{{ CartTotal }}</md-bottom-bar-item>
            </md-bottom-bar>
        </ButtomBar>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    import ProductItem from '../Item/ProductItem.vue';
    import ButtomBar from '../layout/ButtomBar.vue';

    export default {
        components: {
            ProductItem: ProductItem,
            ButtomBar: ButtomBar
        },
        computed: mapGetters({
            foodList: 'getProducts',
            CartTotal: 'getShoppingCartTotal',
        })
    }
</script>