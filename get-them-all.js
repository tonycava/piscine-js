import { people } from './get-them-all.data.js'

export const getArchitects = () => {
  let resTagA = []
  let resTagOther = []
  people.forEach((item) => {
    if (people.tag === 'a') {
      resTagA.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagA, resTagOther]
}
export const getClassical = () => {
  let resTagA = []
  let resTagOther = []
  people.forEach((item) => {
    if (people.classe === 'classical') {
      resTagA.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagA, resTagOther]
}
export const getActive = () => {
  let resTagA = []
  let resTagOther = []
  people.forEach((item) => {
    if (people.active === true) {
      resTagA.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagA, resTagOther]
}

export const getBonannoPisano = () => {
  let resTagA = []
  let resTagOther = []
  people.forEach((item) => {
    if (people.id === 'BonannoPisano') {
      resTagA.push(item)
    } else  {
      resTagOther.push(item)
    }
  })
  return [resTagA, resTagOther]
}