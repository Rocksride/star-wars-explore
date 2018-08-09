<template>
  <div class='container has-text-centered has-text-warning'>
    <h2 class="title is-4">starships</h2>
    <p class="subtilte is-5">{{starships}}</p>
  </div>
</template>

<script>
import * as types from '../store/types'
  export default {
    computed: {
      starships() {
        return this.$store.getters[types.STARSHIPS];
      }
    },

  }
</script>

<style scoped>

</style>
