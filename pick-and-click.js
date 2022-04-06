let mouseInXHue
let mouseInYLum
let fullHSL

export const pick = () => {

  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttributeNS(null, 'height', window.innerHeight)
  svg.setAttributeNS(null, 'width', window.innerWidth)

  let linex = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  linex.setAttributeNS(null, 'id', 'axisY')
  linex.setAttributeNS(null, 'x1', 0)
  linex.setAttributeNS(null, 'y1', 0)
  linex.setAttributeNS(null, 'x2', 0)
  linex.setAttributeNS(null, 'y2', 0)
  linex.style.stroke = "white"
  linex.style.strokeWidth = 1;

  let liney = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  liney.setAttributeNS(null, 'id', 'axisX')
  liney.setAttributeNS(null, 'x1', 0)
  liney.setAttributeNS(null, 'y1', 0)
  liney.setAttributeNS(null, 'x2', 0)
  liney.setAttributeNS(null, 'y2', 0)
  liney.style.stroke = "white"
  liney.style.strokeWidth = 1;

  svg.appendChild(liney)
  svg.appendChild(linex)

  document.body.appendChild(svg)

  let divCenter = document.createElement('div')
  let divHue = document.createElement('div')
  let divLum = document.createElement('div')

  divCenter.className = 'hsl'
  divCenter.classList.add('text')

  divHue.className = 'hue'
  divHue.classList.add('text')

  divLum.className = 'luminosity'
  divLum.classList.add('text')

  document.body.appendChild(divCenter).addEventListener('click', (event) => {
    navigator.clipboard.writeText(fullHSL).then(() => {
    });
    event.preventDefault();
  })

  document.body.append(divHue)
  document.body.append(divLum)

  document.body.addEventListener('mousemove', (event) => {
    mouseInXHue = Math.round(event.clientX / window.innerWidth * 360)
    mouseInYLum = Math.round(event.clientY / window.innerHeight * 100)

    fullHSL = `hsl(${mouseInXHue},50%,${mouseInYLum + '%'})`
    document.body.style.backgroundColor = fullHSL

    let liney = document.getElementById('axisX')
    let linex = document.getElementById('axisY')

    linex.setAttributeNS(null, 'x1', 0)
    linex.setAttributeNS(null, 'y1', event.clientY)
    linex.setAttributeNS(null, 'x2', window.innerWidth)
    linex.setAttributeNS(null, 'y2', event.clientY)

    liney.setAttributeNS(null, 'x1', event.clientX)
    liney.setAttributeNS(null, 'y1', 0)
    liney.setAttributeNS(null, 'x2', event.clientX)
    liney.setAttributeNS(null, 'y2', window.innerHeight)

    divCenter.innerHTML = fullHSL
    divHue.innerHTML = 'hue' + '<br>' + mouseInXHue
    divLum.innerHTML = 'luminosity' + '<br>' + mouseInYLum
  })
}