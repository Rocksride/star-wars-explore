import { testAction } from '../../../../helpers'
import * as types from '@/store/types'
import {clone} from 'ramda'
import seed from '@/store/seed'
import axios from 'axios'
require('../../../../helpers/api')
const dataInjector = require('inject-loader!@/store/modules/data');

const dataModule = dataInjector({
  '@/api': {
    getPeople: () => axios.get('people'),
    getFilms: () => axios.get('films'),
    getPlanets: () => axios.get('planets'),
    getVehicles: () => axios.get('vehicles'),
    getStarships: () => axios.get('starships'),
    getSpecies: () => axios.get('species'),
  }
})

describe('actions', () => {
  it(types.LOAD_FILMS, (done) => {
    const state = clone(dataModule.state)
    testAction(dataModule.actions[types.LOAD_FILMS], null, state, [
      { type: types.MUTATE_SET_FILMS, payload: seed.films}
    ], done)
  })
  it(types.LOAD_PLANETS, (done) => {
    const state = clone(dataModule.state)
    testAction(dataModule.actions[types.LOAD_PLANETS], null, state, [
      { type: types.MUTATE_SET_PLANETS, payload: seed.planets}
    ], done)
  })
  it(types.LOAD_SPECIES, (done) => {
    const state = clone(dataModule.state)
    testAction(dataModule.actions[types.LOAD_SPECIES], null, state, [
      { type: types.MUTATE_SET_SPECIES, payload: seed.species}
    ], done)
  })
  it(types.LOAD_STARSHIPS, (done) => {
    const state = clone(dataModule.state)
    testAction(dataModule.actions[types.LOAD_STARSHIPS], null, state, [
      { type: types.MUTATE_SET_STARSHIPS, payload: seed.starships}
    ], done)
  })
  it(types.LOAD_VEHICLES, (done) => {
    const state = clone(dataModule.state)
    testAction(dataModule.actions[types.LOAD_VEHICLES], null, state, [
      { type: types.MUTATE_SET_VEHICLES, payload: seed.vehicles}
    ], done)
  })
  it(types.LOAD_PEOPLE, (done) => {
    const state = clone(dataModule.state)
    testAction(dataModule.actions[types.LOAD_PEOPLE], null, state, [
      { type: types.MUTATE_SET_PEOPLE, payload: seed.people}
    ], done)
  })
})
