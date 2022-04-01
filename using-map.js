const citiesOnly = (data) => {
  let arr = []
  data.map((item) => {
    arr.push(item.city)
  })
  return arr
}
const upperCasingStates = (data) => {
  let split = []
  let arr = []
  let str = ''
  data.map((item, index) => {
    split = data[index].split(' ')
    if (split.length === 1) {
      arr.push(item.charAt(0).toUpperCase() + item.slice(1))
    } else {
      str = ''
      split.forEach((item2) => {
        item2 = item2.charAt(0).toUpperCase() + item2.slice(1)
        str += ' '
        str += item2
      })
      arr.push(str.trim())
    }
  })
  return arr
}
const fahrenheitToCelsius = (data) => {
  let arr = []
  data.map((item) => {
    let number = Number(item.slice(0, -2))
    let result = (number - 32) / 1.8
    arr.push(Math.floor(result) + '°C'.trim())
  })
  return arr
}
const trimTemp = (obj) => {
  let arr = []
  obj.map((item) => {
    arr.push({city: item.city, state: item.state, region: item.region, temperature: item.temperature.replace(/ /g,'')})
  })
  return arr
}
const tempForecasts  = (data) => {
  let arr = []
  data.forEach((item, index) => {
    let inFunc =  []
    inFunc.push(data[index].temperature)
    let result = fahrenheitToCelsius(inFunc)
    arr.push(result + '°Celsius in ' + item.city + ', ' + upperCasingStates([item.state]))
  })
  return arr
}