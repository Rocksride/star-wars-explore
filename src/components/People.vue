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
            placeholder="e.g. jQuery"
            icon="magnify"
            @select="option => selected = option">
            <template slot="empty">No results found</template>
        </b-autocomplete>
    </b-field>
    <div class="columns is-multiline">
      <people-item v-for="item in filteredDataArray" :item='item' :key="item.id">
        {{ item }}
      </people-item>
    </div>
   </section>
  </div>
</template>

<script>
import * as R from 'ramda';
  import * as types from '../store/types'
  import PeopleItem from './PeopleItem'
  export default {
    data: () => ({
      name: '',
      selected: null,
    }),
    computed: {
      people() {
        return this.$store.getters[types.PEOPLE];
      },
      propositions() {
        return this.filteredDataArray.length > 1? []:this.filteredDataArray.map(x => x.name)
      },
      filteredDataArray() {
        const createRegExp = str => new RegExp(str, 'i');
        // const transducer = R.compose(R.prop('name'), createRegExp, R.filter(R.flip(R.test(this.name))), R.id)
        //   return R.transduse(transducer, R.flip(R.append), [], this.people);
            const reg = createRegExp(this.name);
          return this.people.reduce((acc, curr) => {
            if (reg.test(curr.name)) {
              return [...acc, curr];
            }
            else return acc;
          }, [])
      }
    },
    components: {
      PeopleItem
    }

  }
</script>

<style scoped>

</style>
