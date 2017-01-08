<template>
    <div class="container">
        <br/>
        <md-input-container>
            <label>E-mail Address</label>
            <md-input placeholder="E-mail Address" type="email" v-model="email"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
            <label>密碼</label>
            <md-input type="password" placeholder="密碼：123" v-model="password"></md-input>
        </md-input-container>
        <md-button @click="login" class="md-raised md-primary">登入</md-button>

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
                            title: '登入失敗',
                            text: '帳號或密碼錯誤！'
                        })
                    })
            }
        },
        computed: mapGetters({
            isLoading: 'getLoading'
        })
    }
</script>