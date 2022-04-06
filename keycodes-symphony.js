export const compose = () => {
  document.body.addEventListener('keydown', (e) => {
    let eventCode = e.keyCode
    if (eventCode === 27) {
      document.querySelectorAll("div").forEach((item) => {
        item.remove()
      })
    } else if (eventCode === 8) {
      let lastItem = document.body.lastChild
      lastItem.remove()
    } else {
      let eventKey = e.key
      let newDiv = document.createElement('div')
      newDiv.classList.add('note')
      newDiv.style.background = "#" + 99 + eventCode + eventCode
      document.body.appendChild(newDiv)
      newDiv.innerHTML = eventKey
    }
  })
}