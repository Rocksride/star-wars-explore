<template>
  <div class="column is-half">
        <div class="card">
      <div class="card-content">
        <p class="title is-2">
          "{{item.name}}"
        </p>
        <p class="subtitle is-2">
          <b>Climate:</b>{{item.climate}}
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <h2 class="subtitle is-5"><b>Population: </b>{{item.population}}</h2>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <h2 class="subtitle is-5">
                            <b>Diameter: </b> {{item.diameter}}
            </h2>
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },

  }
</script>

<style scoped>

</style>
