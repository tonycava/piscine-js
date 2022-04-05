let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVW'
let font = 11
let fontWeight = '300'
export const generateLetters = () => {
  for (let i = 0; i < 120; i++) {
    if (i % 40 === 0 && i < 120 && i > 0) {
      if (fontWeight === '300') fontWeight = '400'
      else fontWeight = '600'
      console.log(fontWeight)
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