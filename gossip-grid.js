export const gossips = [
  `Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day`,
  `Lea Michele's lookalike Monica Moskatow says Glee star called her ugly`,
  `WE PAY FOR JUICY INFO!`,
  `Trainer to Hollywood's biggest stars reveals how to get an A-list body`,
  `Ed Sheeran comes out of music retirement to write brand new song`,
  `Kylie Jenner & Travis Scott’s breakup timeline`,
  `Quiet on the set: temper tantrums stars hope you forget`,
  `The style & grace of Chloë Grace Moretz: her top 20 red carpet looks`,
  `Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek's will`,
  `From too hot to not: Paris Hilton and Chris Zylka's relationship history`,
  `No bite in the big apple? Celine Dion looks scary skinny in New York`,
  `Jennifer Aniston and Brad Pitt relationship timeline`,
  `They shouldn’t have said that: 10 celebrity rants heard around the world`,
  `The most intense celebrity fights on set`,
  `The 18 most bitter real housewives feuds`,
  `Tristan Thompson's remarkable transformation from skinny teen to hulking NBA ace`,
  `Kim Kardashian 'considers leaving home' with Kanye West to 'save marriage'`,
]
export const grid = (node, child) => {
  let ranges = document.createElement('div')
  ranges.className = 'ranges'

  let rangeWidth = document.createElement('input')
  rangeWidth.type = 'range'
  rangeWidth.className = 'range'
  rangeWidth.value = '200'
  rangeWidth.id = 'width'
  rangeWidth.min = '200'
  rangeWidth.max = '800'

  let rangeWidthSpan = document.createElement('label')
  rangeWidthSpan.textContent = 'width'
  rangeWidthSpan.htmlFor = 'width'
  rangeWidthSpan.className = 'range'

  let rangeWithP = document.createElement('p')
  rangeWithP.className = 'range'
  rangeWithP.textContent = '200'

  rangeWidth.oninput = () => {
    rangeWithP.innerHTML = rangeWidth.value

    const div = Object.values(document.querySelectorAll('.gossip'))
    div.forEach((item) => {
      item.style.width = rangeWidth.value + 'px'
    })
  }

  let rangeFontSize = document.createElement('input')
  rangeFontSize.type = 'range'
  rangeFontSize.className = 'range'
  rangeFontSize.value = '20'
  rangeFontSize.id = 'fontSize'
  rangeFontSize.min = '20'
  rangeFontSize.max = '40'

  let rangeFontSizeSpan = document.createElement('label')
  rangeFontSizeSpan.textContent = 'fontSize'
  rangeFontSizeSpan.htmlFor = 'fontSize'
  rangeFontSizeSpan.className = 'range'

  let rangeFontSizeP = document.createElement('p')
  rangeFontSizeP.className = 'range'
  rangeFontSizeP.textContent = '20'

  rangeFontSize.oninput = () => {
    rangeFontSizeP.innerHTML = rangeFontSize.value

    const div = Object.values(document.querySelectorAll('.gossip'))
    div.forEach((item) => {
      item.style.fontSize = rangeFontSize.value + 'px'
    })

  }

  let rangeBackground = document.createElement('input')
  rangeBackground.type = 'range'
  rangeBackground.className = 'range'
  rangeBackground.value = '25'
  rangeBackground.id = 'background'
  rangeBackground.min = '25'
  rangeBackground.max = '75'

  let rangeBackgroundSpan = document.createElement('label')
  rangeBackgroundSpan.textContent = 'background'
  rangeBackgroundSpan.htmlFor = 'background'
  rangeBackgroundSpan.className = 'range'

  let rangeBackgroundP = document.createElement('p')
  rangeBackgroundP.className = 'range'
  rangeBackgroundP.textContent = '25'

  rangeBackground.oninput = () => {

    rangeBackgroundP.innerHTML = rangeBackground.value

    const div = Object.values(document.querySelectorAll('.gossip'))
    console.log()
    div.forEach((item) => {
      item.style.backgroundColor = `hsl(280,50%,${rangeBackground.value + '%'})`
    })
  }


  ranges.prepend(rangeWidthSpan)
  ranges.appendChild(rangeWidth)
  ranges.appendChild(rangeWithP)

  ranges.appendChild(rangeFontSizeSpan)
  ranges.appendChild(rangeFontSize)
  ranges.appendChild(rangeFontSizeP)

  ranges.appendChild(rangeBackgroundSpan)
  ranges.appendChild(rangeBackground)
  ranges.appendChild(rangeBackgroundP)

  document.body.appendChild(ranges)


  let formGossip = document.createElement('form')
  let textArea = document.createElement('textarea')
  let submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.textContent = 'Share gossip!'
  textArea.placeholder = 'Got a gossip to share ?'
  formGossip.className = 'gossip'
  formGossip.appendChild(textArea)
  formGossip.appendChild(submitButton)
  document.body.appendChild(formGossip)

  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    let divToAppear = document.createElement('div')
    divToAppear.textContent = textArea.value
    textArea.value = ''
    divToAppear.className = 'gossip'
    divToAppear.classList.add('fade-in')
    formGossip.after(divToAppear)
  })

  gossips.forEach((item) => {
    let newDiv = document.createElement('div')
    newDiv.className = "gossip"
    newDiv.textContent = item
    document.body.appendChild(newDiv)
  })
}