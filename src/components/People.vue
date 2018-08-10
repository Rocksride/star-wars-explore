<template>
  <div class='container has-text-centered has-text-warning'>
    <section class="section">
      <h2 class="title is-2 has-text-warning">Characters</h2>
      <p class="content"><b>Selected:</b> {{ selected }}</p>
      <b-field label="Find character">
        <b-autocomplete rounded v-model="name" :data="propositions" :placeholder="'e.g. '+people[0].name" icon="magnify" @select="option => selected = option">
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
    <div class="columns is-multiline">
      <people-item v-for="item in slicedDataArray" :item='item' :key="item.id">
        {{ item }}
      </people-item>
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
  import PeopleItem from './PeopleItem'
  export default {
    data: () => ({
      name: '',
      current: 1,
      selected: null,
      perPage: 9
    }),
    computed: {
      people() {
        return this.$store.getters[types.PEOPLE];
      },
      propositions() {
        return this.filteredDataArray.length > 1 ? [] : this.filteredDataArray.map(x => x.name)
      },
      filteredDataArray() {

        const createRegExp = str => new RegExp(str, 'i');
        const reg = createRegExp(this.name);
        return this.people.reduce((acc, curr) => {
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
      PeopleItem
    }

  }
</script>

<style scoped>

</style>
