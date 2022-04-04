const href = document.getElementsByTagName("a")
const span = document.getElementsByTagName("span")

const isClassical = document.getElementsByClassName("classical")
const isNotClassical = !document.querySelector("*").classList.contains('classical')

const isActive = document.getElementsByClassName("active")
const isNotActive = !document.querySelector("*").classList.contains('active')

const pisano = document.getElementById('BonannoPisano')
const pisanoAll = document.getElementsByClassName('classical active')

export const getArchitects = () => {
  const resTagA = Object.values(href)
  const resTagOther = Object.values(span)
  return [resTagA, resTagOther]
}

export const getClassical = () => {
  return [isClassical, isNotClassical]
}

export const getActive = () => {
  return [isActive, isNotActive]
}

export const getBonannoPisano = () => {
  return [pisano, pisanoAll]
}