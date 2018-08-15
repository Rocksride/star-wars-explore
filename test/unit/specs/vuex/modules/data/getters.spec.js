import dataModule from '@/store/modules/data.js'
import * as types from '@/store/types'
import seed from '@/store/seed'
describe('data modules getters', () => {
  it(types.PEOPLE, () => {
    expect(dataModule.getters[types.PEOPLE](seed)).to.deep.equal(seed.people)
  });
  it(types.VEHICLES, () => {
    expect(dataModule.getters[types.VEHICLES](seed)).to.deep.equal(seed.vehicles)
  });
  it(types.SPECIES, () => {
    expect(dataModule.getters[types.SPECIES](seed)).to.deep.equal(seed.species)
  });
  it(types.FILMS, () => {
    expect(dataModule.getters[types.FILMS](seed)).to.deep.equal(seed.films)
  });
  it(types.STARSHIPS, () => {
    expect(dataModule.getters[types.STARSHIPS](seed)).to.deep.equal(seed.starships)
  });
  it(types.PLANETS, () => {
    expect(dataModule.getters[types.PLANETS](seed)).to.deep.equal(seed.planets)
  });

})
