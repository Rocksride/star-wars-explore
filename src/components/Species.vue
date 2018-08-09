<template>
  <div class='container has-text-centered has-text-warning'>
    <h2 class="title is-4">species</h2>
    <p class="subtilte is-5">{{species}}</p>
  </div>
</template>

<script>
import * as types from '../store/types'
  export default {
    computed: {
      species() {
        return this.$store.getters[types.SPECIES];
      }
    },

  }
</script>

<style scoped>

</style>
