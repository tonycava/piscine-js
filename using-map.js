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
const tempForecasts = (states) => {
  return states.map(all => {
    const regex = /\s/g
    const resRegex = new RegExp(regex)
    const regexSpace = /\s\w/g
    const regexSp = new RegExp(regexSpace)
    let strin = all.temperature
    let res2 = all.state.match(regexSp)
    let str = strin.match(resRegex)
    // let res3 = all.state.match(regexSp)
    let res = strin.replace(resRegex, '')
    if (res2 !== null) {
      all.state = all.state.replace(regexSp, res2[0].toUpperCase())
    }
    res = parseInt(res)
    let cel = (res - 32) * 5 / 9
    cel = Math.floor(cel)
    return cel + '°Celsius in ' + all.city + ', ' + all.state[0].toUpperCase() + all.state.slice(1)
  })
}
const stats = [
  {city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F'},
  {city: 'Jackson', state: 'mississippi', region: 'South', temperature: '70°F'}
]
console.log(tempForecasts(stats))