import axios from 'axios'
import 'es6-promise/auto'

export const getPeople = () => axios.get('people');
export const getFilms = () => axios.get('films');
export const getPlanets = () => axios.get('planets');
export const getVehicles = () => axios.get('vehicles');
export const getStarships = () => axios.get('starships');
export const getSpecies = () => axios.get('species');
