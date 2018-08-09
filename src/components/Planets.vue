<template>
  <div class='container has-text-centered has-text-warning'>
    <h2 class="title is-4">planets</h2>
    <p class="subtilte is-5">{{planets}}</p>
  </div>
</template>

<script>
import * as types from '../store/types'
  export default {
    computed: {
      planets() {
        return this.$store.getters[types.PLANETS];
      }
    },

  }
</script>

<style scoped>

</style>
