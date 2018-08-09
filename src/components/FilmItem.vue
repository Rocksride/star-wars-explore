<template>
  <div class="column is-half">
        <div class="card">
      <div class="card-content">
        <p class="subtitle is-4">
          "{{item.opening_crawl.slice(0, 100)+'...'}}"
        </p>
        <p class="title is-2">
          {{item.title}}
        </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            Share on <a href="#">Facebook</a>
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
