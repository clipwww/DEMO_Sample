<template>
    <md-card  :class="{ max: !item.inventory }" style="margin-bottom: 15px">
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">{{ item.title }}</div>
                <div class="md-subhead">$ {{ item.price }}</div>
            </md-card-header-text>

            <md-card-media>
                <img :src="item.image" :alt="item.title">
            </md-card-media>
        </md-card-header>

        <md-card-actions style="justify-content: flex-start">
            <md-button class="md-raised" 
            :class="{
                'md-warn': item.inventory == 1,
                'md-primary': item.inventory >= 2,
            }"
            :disabled="!item.inventory"
            @click="addCart( item.id )">{{ $t(ButtonText) }}</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    import {
        mapActions
    } from 'vuex';

    export default {
        props: {
            item: Object
        },
        data() {
            return {

            }
        },
        methods: mapActions([
            'addCart'
        ]),
        computed: {
            ButtonText() {
                if (this.item.inventory == 1) {
                    return this.item.inventory;
                } else if (this.item.inventory >= 2) {
                    return this.item.inventory;
                } else {
                    return 'Sold_Out';
                }

            }
        }
    }
</script>