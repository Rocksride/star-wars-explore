<template>
  <Layout>
    <the-navbar slot='nav' />
    <div class="container" slot='content'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <the-footer slot='footer' />
  </Layout>
</template>

<script>
  import * as types from './store/types'
  import Navbar from '@/components/Navbar'
  import Layout from '@/components/Layout'
  import Footer from '@/components/Footer'
  export default {
    name: 'App',
    components: {
      TheNavbar: Navbar,
      Layout,
      TheFooter: Footer
    },
    mounted() {
      this.$store.dispatch(types.LOAD_DATA);
    }
  }
</script>

<style>
  #app {
    width: 100vw;
    height: 100vh;
  }
</style>
