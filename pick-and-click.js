let mouseInXHue
let mouseInYLum
let fullHSL
export const pick = () => {
  let divCenter = document.createElement('div')
  let divHue = document.createElement('div')
  let divLum = document.createElement('div')

  divCenter.classList.add('hsl')
  divHue.classList.add('hue')
  divLum.classList.add('luminosity')

  document.body.appendChild(divCenter)
  document.body.append(divHue)
  document.body.append(divLum)

  document.body.addEventListener('mousemove', (event) => {
    mouseInXHue = Math.round(event.clientX / 360 * 100)
    mouseInYLum = Math.round(event.clientY / 7)
    fullHSL = `hsl(${mouseInXHue},50%,${mouseInYLum + '%'})`
    document.body.style.backgroundColor = fullHSL

    divCenter.innerText = fullHSL
    divHue.innerText = 'hue' + mouseInXHue
    divLum.innerText = 'luminosity' + mouseInYLum
  })
}