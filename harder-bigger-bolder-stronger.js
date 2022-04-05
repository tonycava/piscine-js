let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVW'
let font = 11
let fontWeight = '300'
export const generateLetters = () => {
  for (let i = 1; i < 121; i++) {
    if (i % 39 === 0) {
      if (fontWeight === '300') fontWeight = '400'
      else fontWeight = '600'
    }
    let newDiv = document.createElement('div')
    const random = Math.floor(Math.random() * (alphabet.length));
    newDiv.textContent = alphabet.charAt(random)
    newDiv.style.fontSize = `${font}` + 'px'
    newDiv.style.fontWeight = fontWeight
    font++
    document.body.appendChild(newDiv)
  }
}