import { people } from './get-them-all.data.js'

export const getArchitects = () => {
  let resTagA = []
  let resTagOther = []
  people.forEach((item) => {
    if (item.tag === 'a') {
      resTagA.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagA, resTagOther]
}
export const getClassical = () => {
  let resTagClasse = []
  let resTagOther = []
  people.forEach((item) => {
    if (item.classe === 'classical') {
      resTagClasse.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagClasse, resTagOther]
}
export const getActive = () => {
  let resTagActive = []
  let resTagOther = []
  people.forEach((item) => {
    if (item.active === true) {
      resTagActive.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagActive, resTagOther]
}

export const getBonannoPisano = () => {
  let resTagId = []
  let resTagOther = []
  people.forEach((item) => {
    if (item.id === 'BonannoPisano') {
      resTagId.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagId, resTagOther]
}