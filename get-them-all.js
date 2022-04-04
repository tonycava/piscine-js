const href = document.getElementsByTagName('a');
const span = document.getElementsByTagName('span');
const isClassical = document.getElementsByClassName("classical")
const isNotClassical = Array.from(document.querySelectorAll("a:not(.classical)"))

export const getArchitects = () => {
  let resGoodArchi = Object.values(href)
  let resFailArchi = Object.values(span)
  return [resGoodArchi, resFailArchi]
}

export const getClassical = () => {
  return [isClassical, isNotClassical]
}

export const getActive = () => {
  return []
}

export const getBonannoPisano = () => {
  return []
}