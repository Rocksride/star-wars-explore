import dataModule from '@/store/modules/data.js'
import * as types from '@/store/types'
import * as R from 'ramda';

import seed from '@/store/seed'
describe('data modules mutations initiating', () => {
  it(types.MUTATE_SET_PEOPLE, () => {
    const state = R.clone(dataModule.state);
    dataModule.mutations[types.MUTATE_SET_PEOPLE](state, seed.people);
    expect(state.people).to.deep.equal(seed.people)
  });
  it(types.MUTATE_SET_FILMS, () => {
    const state = R.clone(dataModule.state);
    dataModule.mutations[types.MUTATE_SET_FILMS](state, seed.films);
    expect(state.films).to.deep.equal(seed.films)
  });
  it(types.MUTATE_SET_PLANETS, () => {
    const state = R.clone(dataModule.state);
    dataModule.mutations[types.MUTATE_SET_PLANETS](state, seed.planets);
    expect(state.planets).to.deep.equal(seed.planets)
  });
  it(types.MUTATE_SET_SPECIES, () => {
    const state = R.clone(dataModule.state);
    dataModule.mutations[types.MUTATE_SET_SPECIES](state, seed.species);
    expect(state.species).to.deep.equal(seed.species)
  });
  it(types.MUTATE_SET_STARSHIPS, () => {
    const state = R.clone(dataModule.state);
    dataModule.mutations[types.MUTATE_SET_STARSHIPS](state, seed.starships);
    expect(state.starships).to.deep.equal(seed.starships)
  });
  it(types.MUTATE_SET_VEHICLES, () => {
    const state = R.clone(dataModule.state);
    dataModule.mutations[types.MUTATE_SET_VEHICLES](state, seed.vehicles);
    expect(state.vehicles).to.deep.equal(seed.vehicles)
  });


})
