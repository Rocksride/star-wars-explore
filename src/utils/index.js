
export const prependPath = path => `https://starwars.egghead.training/${path}`

export const testMatchAtLeastOneProp = regexp => obj => Object.values(obj).reduce((acc, curr) => {
  return acc || regexp.test(curr);
},false)

export const testMatchAllProps = regexp => obj => Object.values(obj).reduce((acc, curr) => {
  return acc && regexp.test(curr);
},false)
