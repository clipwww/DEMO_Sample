<template>
  <div class="fixed-navbar">
    <md-sidenav class="md-left md-fixed" ref="sidebar">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <a href="https://github.com/clipwww" target="_blank">
              <md-avatar class="md-large">
                    <img :src="pic" alt="People">
              </md-avatar>
            </a>
            <span style="flex: 1"></span>

          </md-list-item>

          <md-list-item>
            <div class="md-list-text-container">
              <span>clipwww</span>
              <span>clipwww@gmail.com</span>
            </div>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/Home">
            <md-icon>home</md-icon><span>{{ $t(PageTitleList['/Home']) }}</span>
          </router-link>
        </md-list-item>
        
        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/C2F">
            <md-icon>autorenew</md-icon><span>{{ $t(PageTitleList['/C2F']) }}</span>
          </router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/Counter">
            <md-icon>alarm_add</md-icon><span>{{ $t(PageTitleList['/Counter']) }}</span>
          </router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/Todo">
            <md-icon>list</md-icon><span>{{ $t(PageTitleList['/Todo']) }}</span>
          </router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
            <md-icon>shopping_cart</md-icon><span>{{ $t('Shopping_Cart' )}}</span>
            <md-list-expand>
                <md-list>
                  <router-link to="/Shop">
                    <md-list-item class="md-inset">{{ $t(PageTitleList['/Shop']) }}</md-list-item>
                  </router-link>
                  <router-link to="/Cart">
                    <md-list-item class="md-inset">
                      {{ PageTitleList['/Cart'] }}
                       <span style="flex: 1"></span>
                      <md-icon>shopping_cart</md-icon>　{{ CartTotal }}
                    </md-list-item>
                  </router-link>
                </md-list>
            </md-list-expand>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/KomicaLive">
            <md-icon>star_rate</md-icon><span>{{ $t(PageTitleList['/KomicaLive']) }}</span>
          </router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/Member">
            <md-icon>vpn_key</md-icon><span>{{ $t(PageTitleList['/Member']) }}</span>
          </router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/Setting">
            <md-icon>settings</md-icon><span>{{ $t(PageTitleList['/Setting']) }}</span>
          </router-link>
        </md-list-item>

      </md-list>
    </md-sidenav>

    <md-whiteframe md-elevation="3">
      <md-toolbar>
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1">{{ $t(PageTitle) }}</h2>
        <span style="flex: 1"></span>

          <md-button class="md-icon-button">
            <router-link to="/Setting" style="color: white">
              <md-icon>settings</md-icon>
            </router-link>
          </md-button>

      </md-toolbar>
    </md-whiteframe>
  </div>
</template>

<script>
    import pic from '../../images/20637418_m.jpg';
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        data() {
            return {
                pic: pic
            };
        },
        computed: Object.assign({},
            mapGetters({
                CartTotal: 'getShoppingCartTotal',
                PageTitleList: 'getPageTitleList',
            }), {
                PageTitle() {
                    return this.PageTitleList[this.$route.path] ? this.PageTitleList[this.$route.path] : this.$route.name;
                }
            }
        ),
        methods: {

        },
        watch: {
            '$route' (to, from) {

            }
        }
    };
</script>

<style>
    .fixed-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999999999;
    }
</style>