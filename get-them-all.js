const href = document.getElementsByTagName('a');
const span = document.getElementsByTagName('span');

const isClassical = Array.from(document.getElementsByClassName("classical"))
const isNotClassical = Array.from(document.querySelectorAll("a:not(.classical)"))

export const getArchitects = () => {
  let resGoodArchi = Object.values(href)
  let resFailArchi = Object.values(span)
  return [resGoodArchi, resFailArchi]
}

export const getClassical = () => {
  let arr = []
  let isClassical = Array.from(document.getElementsByClassName('classical'))
  let isNotClassical = Array.from(document.querySelectorAll('a:not(.classical)'))
  arr.push(isClassical)
  arr.push(isNotClassical)
  return arr
}

export const getActive = () => {
  let arr = []
  let isActive = Array.from(document.getElementsByClassName('classical active'))
  let isNotClassical = Array.from(document.querySelectorAll('a.classical:not(.active)'))
  arr.push(isActive)
  arr.push(isNotClassical)
  return arr
}

export const getBonannoPisano = () => {
  let arr = []
  let isBonannoPisano = document.getElementById('BonannoPisano')
  let isNotBonannoPisano = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))
  arr.push(isBonannoPisano)
  arr.push(isNotBonannoPisano)
  return arr
}