<template>
  <div class="column   is-one-third is-primary">
    <div class="card shadowed rounded">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="image" :alt="item.name">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="image" class='is-rounded' :alt="item.name">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{item.name}}</p>
            <p class="subtitle is-6">Gender: {{item.gender}}</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
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
  .shadowed {
           box-shadow: 5px 5px 10px -2px rgba(179,169,59,1);
  }
  .rounded {
    border-radius: 5px;
    overflow: hidden;
  }
</style>
