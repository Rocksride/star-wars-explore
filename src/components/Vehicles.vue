<template>
  <div class='container has-text-centered has-text-warning'>
    <h2 class="title is-4">vehicles</h2>
    <p class="subtilte is-5">{{vehicles}}</p>
  </div>
</template>

<script>
import * as types from '../store/types'
  export default {
    computed: {
      vehicles() {
        return this.$store.getters[types.VEHICLES];
      }
    },

  }
</script>

<style scoped>

</style>
