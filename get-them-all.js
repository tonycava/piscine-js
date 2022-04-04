const href = document.getElementsByTagName('a');

const isClassical = document.getElementsByClassName("classical")
const isNotClassical = !document.querySelector("*").classList.contains('classical')

const isActive = document.getElementsByClassName("active")
const isNotActive = !document.querySelector("*").classList.contains('active')

const pisano = document.getElementById('BonannoPisano')
const pisanoAll = document.getElementsByClassName('classical active')

export const getArchitects = () => {


  const resTagA = Object.values(href)
  const resTagOther = Object.values(href)
  console.log([resTagA, resTagOther])
  return [resTagA, resTagOther]
}

export const getClassical = () => {
  let resGoodArchi = []
  let resFailArchi = []
  for (let idx= 0; idx < href.length; idx++) {
    if (href[idx].innerText === 'Architect') resGoodArchi.push(href[idx])
    else resFailArchi.push(href[idx])
  }
  return [resGoodArchi, resFailArchi]
}

export const getActive = () => {
  const resTagA = Object.values(href)
  const resTagOther = Object.values(href)
  console.log([resTagA, resTagOther])
  return [resTagA, resTagOther]
}

export const getBonannoPisano = () => {
  const resTagA = Object.values(href)
  const resTagOther = Object.values(href)
  console.log([resTagA, resTagOther])
  return [resTagA, resTagOther]
}