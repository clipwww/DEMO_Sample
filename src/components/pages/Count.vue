<template>
    <div class="container">
        <h2>Count: {{ count }}</h2>
        <md-input-container>
            <label>Set Number</label>
            <md-input type="number" v-model="num"></md-input>
        </md-input-container>
        <md-button @click="actionIncrease(num)" class="md-raised md-primary">+</md-button>
        <md-button @click="actionDecrease(num)" class="md-raised md-accent">-</md-button>
        <md-button @click="actionCountReset" class="md-raised md-warn">歸零</md-button>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        data() {
            return {
                num: 1,
            }
        },
        computed: mapGetters({
            count: "getCount",
            AllState: 'getAllstate'
        }),
        methods: mapActions([
            'actionIncrease',
            'actionDecrease',
            'actionCountReset'
        ]),
        created() {

        }
    }
</script>