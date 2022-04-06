let mouseInXHue
let mouseInYLum
let fullHSL
let alreadyHere = false

export const pick = () => {
  let divCenter = document.createElement('div')
  let divHue = document.createElement('div')
  let divLum = document.createElement('div')

  divCenter.className = 'hsl'

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

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svgNS = svg.namespaceURI;

    let rect = document.createElementNS(svgNS, 'rect');
    let rect2 = document.createElementNS(svgNS, 'rect');

    rect.setAttribute('x', event.x);
    rect.setAttribute('y', 0);

    // rect2.setAttribute('X', 0);
    // rect2.setAttribute('y', event.y);

    rect.setAttribute('width', 1);
    // rect2.setAttribute('width', 1);

    rect.setAttribute('height', window.innerHeight);
    // rect2.setAttribute('height', window.innerWidth);

    if (alreadyHere) {
      document.body.lastChild.remove()
      document.body.appendChild(svg);
      svg.appendChild(rect);
      // svg.appendChild(rect2)
    } else {
      document.body.appendChild(svg);
      svg.appendChild(rect);
      // svg.appendChild(rect2)
    }
    alreadyHere = true

    fullHSL = `hsl(${mouseInXHue},50%,${mouseInYLum + '%'})`
    document.body.style.backgroundColor = fullHSL

    divCenter.innerHTML = fullHSL
    divHue.innerHTML = 'hue' + '<br>' + mouseInXHue
    divLum.innerHTML = 'luminosity' + '<br>' + mouseInYLum
  })
}