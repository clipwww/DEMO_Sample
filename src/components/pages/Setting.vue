<template>
    <div class="container">
        <br/>
        <h2>{{ $t('Language') }}</h2>
        <md-radio v-model="lang" id="en" name="lang" md-value="en">English</md-radio>
        <md-radio v-model="lang" id="tw" name="lang" md-value="tw">正體中文</md-radio>
        <!--<md-radio v-model="lang" id="jp" name="lang" md-value="jp" @change="setLanguage( 'jp' )">日文</md-radio>-->
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
                lang: this.$store.state.lang
            }
        },
        methods: mapActions(['setLanguage']),
        watch: {
            lang(newVal, oldVal) {
                this.setLanguage(newVal);
            }
        }
    }
</script>