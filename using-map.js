const citiesOnly2 = ([
  {
    city: 'Los Angeles',
    temperature: '  101 °F   ',
  },
  {
    city: 'San Francisco',
    temperature: ' 84 ° F   ',
  },
])

const citiesOnly = (data) => {
  let arr = []
  data.map((item) => {
    arr.push(item.city)
  })
  return arr
}
const upperCasingStates = (data) => {
  let arr = []
  data.map((item) => {
    arr.push(item.charAt(0).toUpperCase() + item.slice(1))
  })
  return arr
}
const fahrenheitToCelsius = (data) => {
  let arr = []
  data.map((item) => {
    let number = Number(item.slice(0, -2))
    let result = (number - 32) / 1.8
    arr.push(Math.floor(result))
  })
  return arr
}
const trimTemp = (obj) => {
  let arr = []
  obj.map((item) => {
    arr.push({city: item.city, temperature: item.temperature.trim()})
  })
  return arr
}
const tempForecasts  = (data) => {
  let str = ''
  data.forEach((item, index) => {
    let inFunc =  []
    inFunc.push(data[index].temperature)
    let result = fahrenheitToCelsius(inFunc)
    str += result + '°Celsius in ' + item.city + ', ' + upperCasingStates([item.state])
  })
  return str
}