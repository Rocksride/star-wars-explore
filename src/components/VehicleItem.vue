<template>
  <div class="column is-one-third is-primary">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="image" :alt="item.model">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="image" :alt="item.model">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{item.model}}</p>
            <p class="subtitle is-6"><b>Vehicle class:</b> {{item.vehicle_class}}</p>
            <p class="subtitle is-6"><b>Cost: </b>{{item.cost_in_credits}} credits</p>
            <p class="subtitle is-6"><b>Crew: </b>{{item.crew}}</p>
          </div>
        </div>

        <div class="content">
          <h2 class="subtitle is-4"><b>Manufacturer:</b>{{item.manufacturer}}</h2>
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as helpers from '../utils'
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      image() {
        return helpers.prependPath(this.item.image)
      }
    }
  }
</script>

<style scoped>

</style>
