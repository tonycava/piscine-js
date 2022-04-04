let idCustom = 1
let counterFoundation = 2
export const build = (x) => {
  let nIntervId = setInterval(() => {
    let newDiv = document.createElement('div')
    newDiv.id = `brick-${idCustom}`
    newDiv.innerHTML = idCustom
    if (counterFoundation === 3) {
      newDiv.setAttribute('foundation', 'true');
    }
    document.body.appendChild(newDiv)
    idCustom++
    counterFoundation++
    if (idCustom === x + 1) {
      clearInterval(nIntervId)
    }
  }, 100, x);
}

export const repair = (...repairs) => {
  for (let i = 0; i < repairs.length; i++) {
    let elem = document.getElementById(repairs[i])
    let n = repairs[i].replace('brick-', '')
    if (n % 3 === 2) {
      elem.setAttribute('data-repaired', "in progress")
      elem.innerHTML = n
    } else {
      elem.setAttribute("data-repaired", "true")
      elem.innerHTML = n
    }
  }
}
export const destroy = () => {
  const toDelete = document.body.lastChild
  toDelete.remove()
}