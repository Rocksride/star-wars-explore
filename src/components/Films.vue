<template>
  <div class='container has-text-centered has-text-warning'>
    <section class="section">
      <h2 class="title is-2 has-text-warning">Characters</h2>
          <p class="content"><b>Selected:</b> {{ selected }}</p>
    <b-field label="Find a JS framework">
        <b-autocomplete
            rounded
            v-model="name"
            :data="propositions"
            :placeholder="films[0].title"
            icon="magnify"
            @select="option => selected = option">
            <template slot="empty">No results found</template>
        </b-autocomplete>
    </b-field>
    <div class="columns is-multiline">
      <film-item v-for="item in filteredDataArray" :item='item' :key="item.id">
        {{ item }}
      </film-item>
    </div>
  </section>
  </div>
</template>

<script>
import * as R from 'ramda';
import * as helpers from '../utils'
  import * as types from '../store/types'
  import FilmItem from './FilmItem'
  export default {
    data: () => ({
      name: '',
      selected: null,
    }),
    computed: {
      films() {
        return this.$store.getters[types.FILMS];
      },
      propositions() {
        return this.filteredDataArray.length > 1? []:this.filteredDataArray.map(x => x.title)
      },
      filteredDataArray() {
        const createRegExp = str => new RegExp(str, 'i');
            const reg = createRegExp(this.name);
          return this.films.reduce((acc, curr) => {
            if (helpers.testMatchAtLeastOneProp(reg)(curr)) {
              return [...acc, curr];
            }
            else return acc;
          }, [])
      }
    },
    components: {
      FilmItem
    }

  }
</script>

<style scoped>

</style>
