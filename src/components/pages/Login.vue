<template>
    <div class="container">
        <br/>
        <h2>{{ $t('Please_Sign_In') }}</h2>
        <md-input-container>
            <label>{{ $t('Email_Address') }}</label>
            <md-input :placeholder="$t('Email_Address')" type="email" v-model="email"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
            <label>{{ $t('Password') }}</label>
            <md-input type="password" :placeholder="$t('Password') + '：123'" v-model="password"></md-input>
        </md-input-container>
        <md-button @click="login" class="md-raised md-primary">{{ $t('Sign_In') }}</md-button>

    </div>
</template>

<script>
    import {
        magActions,
        mapGetters
    } from 'vuex';
    import {
        default as swal
    } from 'sweetalert2';

    export default {
        components: {

        },
        data() {
            return {
                email: 'clipwww@gmail.com',
                password: '',
            }
        },
        methods: {
            login() {
                this.$store.dispatch('actionLogin', {
                        email: this.email,
                        password: this.password,
                    })
                    .then(() => { //接收到 resolve
                        // 使用 $router.push 轉跳到 hello Page
                        this.$router.push('/Member');
                    })
                    .catch(() => { //接收到 reject
                        swal({
                            type: 'error',
                            title: this.$t('Login_Error_Title'),
                            text: this.$t('Login_Error_Msg')
                        })
                    })
            }
        },
        computed: mapGetters({
            isLoading: 'getLoading'
        })
    }
</script>