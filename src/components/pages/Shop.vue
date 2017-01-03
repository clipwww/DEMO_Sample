<template>
    <div class="container">
        <ProductItem v-for="(item, index) in foodList" :item="item"></ProductItem>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    import ProductItem from '../Item/ProductItem.vue';
    export default {
        components: {
            ProductItem: ProductItem,
        },
        computed: mapGetters({
            foodList: 'getProducts',
        })
    }
</script>