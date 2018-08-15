const state = {
  people: [],
  vehicles: [],
  starships: [],
  films: [],
  planets: [],
  species: [],
}

import * as api from '@/api'
import * as types from '../types'
import {
  Toast
} from 'buefy'
import {
  from,
  forkJoin,
  defer,
  of,
  EMPTY,
} from 'rxjs'
import {
  pluck,
  retry,
  retryWhen,
  switchMap,
  tap,
  switchMapTo,
} from 'rxjs/operators'

const log = tap(console.log);



export const actions = {
  [types.LOAD_FILMS]: ({
    commit
  }) => {
    defer(() => api.getFilms()).pipe(
      pluck('data'),
      retryWhen(errorObs => errorObs.pipe(delay(1000)))
    ).subscribe(
      data => {
        commit(types.MUTATE_SET_FILMS, data);
      },
      err => {
        console.log(err);
      })
  },
  [types.LOAD_PEOPLE]: ({
    commit
  }) => {
    defer(() => api.getPeople()).pipe(
      retryWhen(errorObs => errorObj.pipe(delay(1000))),
      pluck('data')
    ).
      subscribe(
        data => {
          commit(types.MUTATE_SET_PEOPLE, data);
        },
        error => {
          console.log(err);
        })
  },
  [types.LOAD_PLANETS]: ({
    commit
  }) => {
    defer(() => api.getPlanets()).pipe(
      retryWhen(errorObs => errorObj.pipe(delay(1000))),
      pluck('data')
    ).
      subscribe(
        data => {
          commit(types.MUTATE_SET_PLANETS, data);
        },
        error => {
          console.log(err);
        })
  },
  [types.LOAD_SPECIES]: ({
    commit
  }) => {
    defer(() => api.getSpecies()).pipe(
      retryWhen(errorObs => errorObj.pipe(delay(1000))),
      pluck('data')
    ).
      subscribe(
        data => {
          commit(types.MUTATE_SET_SPECIES, data);
        },
        error => {
          console.log(err);
        })
  },
  [types.LOAD_STARSHIPS]: ({
    commit
  }) => {
    defer(() => api.getStarships()).pipe(
      retryWhen(errorObs => errorObj.pipe(delay(1000))),
      pluck('data')
    ).
      subscribe(
        data => {
          commit(types.MUTATE_SET_STARSHIPS, data);
        },
        error => {
          console.log(err);
        })
  },
  [types.LOAD_VEHICLES]: ({
    commit
  }) => {
    defer(() => api.getVehicles()).pipe(
      retryWhen(errorObs => errorObj.pipe(delay(1000))),
      pluck('data')
    ).
      subscribe(
        data => {
          commit(types.MUTATE_SET_VEHICLES, data);
          // Toast.open({
          //   type: 'is-success',
          //   message: 'success',
          //   position: 'is-top',
          //   duration: 500
          // })
        },
        error => {
          console.log(err);
          // Toast.open({
          //   type: 'is-danger',
          //   message: 'vehicles data was not loaded',
          //   position: 'is-top',
          //   duration: 500
          // })
        })
  },
  [types.LOAD_DATA]: ({ dispatch }) => {
    dispatch(types.LOAD_FILMS);
    dispatch(types.LOAD_PEOPLE);
    dispatch(types.LOAD_PLANETS);
    dispatch(types.LOAD_VEHICLES);
    dispatch(types.LOAD_SPECIES);
    dispatch(types.LOAD_STARSHIPS);
  }
}


const getters = {
  [types.PEOPLE]: state => state.people,
  [types.VEHICLES]: state => state.vehicles,
  [types.STARSHIPS]: state => state.starships,
  [types.FILMS]: state => state.films,
  [types.PLANETS]: state => state.planets,
  [types.SPECIES]: state => state.species,
}

const mutations = {
  [types.MUTATE_SET_FILMS]: (state, payload) => state.films = payload,
  [types.MUTATE_SET_PEOPLE]: (state, payload) => state.people = payload,
  [types.MUTATE_SET_PLANETS]: (state, payload) => state.planets = payload,
  [types.MUTATE_SET_SPECIES]: (state, payload) => state.species = payload,
  [types.MUTATE_SET_STARSHIPS]: (state, payload) => state.starships = payload,
  [types.MUTATE_SET_VEHICLES]: (state, payload) => state.vehicles = payload,
}



export default {
  state,
  getters,
  mutations,
  actions
}
