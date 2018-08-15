import seed from '@/store/seed'
import axios from 'axios'
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock.onGet('people').reply(200, seed.people)
mock.onGet('planets').reply(200, seed.planets)
mock.onGet('films').reply(200, seed.films)
mock.onGet('species').reply(200, seed.species)
mock.onGet('vehicles').reply(200, seed.vehicles)
mock.onGet('starships').reply(200, seed.starships)
