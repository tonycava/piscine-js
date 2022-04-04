const href = document.getElementsByTagName('a');
const span = document.getElementsByTagName('span');

const isClassical = document.getElementsByClassName("classical")
const isNotClassical = !document.querySelector("*").classList.contains('classical')

const isActive = document.getElementsByClassName("active")
const isNotActive = !document.querySelector("*").classList.contains('active')

const pisano = document.getElementById('BonannoPisano')
const pisanoAll = document.getElementsByClassName('classical active')

export const getArchitects = () => {
  let resGoodArchi = Object.values(href)
  let resFailArchi = Object.values(span)

  // for (let idx= 0; idx < href.length; idx++) {
  //   if (href[idx].innerText !== 'Architect') resGoodArchi.push(href[idx])
  // }
  console.log([resGoodArchi, resFailArchi])
  return [resGoodArchi, resFailArchi]
}

export const getClassical = () => {
  return ['la', 'le']
}

export const getActive = () => {
  return []
}

export const getBonannoPisano = () => {
  return []
}