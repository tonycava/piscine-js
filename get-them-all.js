const href = document.getElementsByTagName('a');
const span = document.getElementsByTagName('span');

const isClassical = document.getElementsByClassName("classical")
const isNotClassical = !document.querySelector("*").classList.contains('classical')

const isActive = document.getElementsByClassName("active")
const isNotActive = !document.querySelector("*").classList.contains('active')

const pisano = document.getElementById('BonannoPisano')
const pisanoAll = document.getElementsByClassName('classical active')

export const getArchitects = () => {
  let resGoodArchi = []
  let resFailArchi = []
  for (let idx= 0; idx < href.length; idx++) {
    if (href[idx].innerText === 'Architect') resGoodArchi.push(href[idx].id)
    else resFailArchi.push(span[idx].id)
  }
  return [resGoodArchi, resFailArchi]
}

export const getClassical = () => {
  let resGoodArchi = []
  let resFailArchi = []
  for (let idx= 0; idx < href.length; idx++) {
    if (href[idx].innerText === 'Architect') resGoodArchi.push(href.id)
    else resFailArchi.push(href.id)
  }
  return [resGoodArchi, resFailArchi]
}

export const getActive = () => {
  let resGoodArchi = []
  let resFailArchi = []
  for (let idx= 0; idx < href.length; idx++) {
    if (href[idx].innerText === 'Architect') resGoodArchi.push(href[idx])
    else resFailArchi.push(href[idx])
  }
  return [resGoodArchi, resFailArchi]
}

export const getBonannoPisano = () => {
  let resGoodArchi = []
  let resFailArchi = []
  for (let idx= 0; idx < href.length; idx++) {
    if (href[idx].innerText === 'Architect') resGoodArchi.push(href[idx])
    else resFailArchi.push(href[idx])
  }
  return [resGoodArchi, resFailArchi]
}