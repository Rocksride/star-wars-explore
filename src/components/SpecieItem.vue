<template>
  <div class="column is-half">
        <div class="card">
      <div class="card-content">
        <p class="title is-2">
          {{item.name|| ''}}
        </p>
        <p class="subtitle is-2">
          <b>Name:</b>{{item.name|| ''}}
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <h2 class="subtitle is-5"><b>Eye colors: </b>{{item.eye_colors}}</h2>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <h2 class="subtitle is-5">
                            <b>Average life span: </b> {{item.average_lifespan}}
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
