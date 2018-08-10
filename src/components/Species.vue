<template>
  <div class='container has-text-centered has-text-warning'>
    <section class="section">
      <h2 class="title is-2 has-text-warning">Species</h2>
      <p class="content"><b>Selected:</b> {{ selected }}</p>
      <b-field label="explore specie">
        <b-autocomplete rounded v-model="name" :data="propositions" :placeholder="'e.g. '+species[0].name" icon="magnify" @select="option => selected = option">
          <template slot="empty">No results found
</template>
        </b-autocomplete>
    </b-field>
        <!-- <hr> -->
    <b-pagination
        :total="filteredDataArray.length"
        :current.sync="current"
        order="is-centered"
        size="is-medium"
        :simple="false"
        :rounded="false"
        :per-page="perPage">
    </b-pagination>
    <div class="columns center is-multiline">
      <specie-item v-for="item in slicedDataArray" :item='item' :key="item.id">
        {{ item }}
      </specie-item>
    </div>
    <b-pagination
        :total="filteredDataArray.length"
        :current.sync="current"
        order="is-centered"
        size="is-medium"
        :simple="false"
        :rounded="false"
        :per-page="perPage">
    </b-pagination>
  </section>
  </div>
</template>

<script>
  import * as R from 'ramda';
  import * as types from '../store/types'
  import * as helpers from '../utils'
  import SpecieItem from './SpecieItem'
  export default {
    data: () => ({
      name: '',
      current: 1,
      selected: null,
      perPage: 4
    }),
    computed: {
      species() {
        return this.$store.getters[types.SPECIES];
      },
      propositions() {
        return this.filteredDataArray.length > 1 ? [] : this.filteredDataArray.map(x => x.name)
      },
      filteredDataArray() {

        const createRegExp = str => new RegExp(str, 'i');
        const reg = createRegExp(this.name);
        return this.species.reduce((acc, curr) => {
          if (helpers.testMatchAtLeastOneProp(reg)(curr)) {
            return [...acc, curr];
          } else return acc;
        }, []);
      },
      slicedDataArray() {
        const rangeStart = this.perPage * (this.current-1);
        const rangeEnd = rangeStart + this.perPage;
        return this.filteredDataArray.slice(rangeStart, rangeEnd);
      }
    },
    components: {
      SpecieItem
    }

  }
</script>

<style scoped>
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
