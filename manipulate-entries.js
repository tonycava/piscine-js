const filterEntries = (obj, func) => {
  let newObj = {}
  for (const [keys, values] of Object.entries(obj)) {
    if (func([keys, values])) newObj[keys] = values
  }
  return newObj
}
const mapEntries = (obj, func) => {
  let newObj = {}
  for (const [keys, values] of Object.entries(obj)) {
    const resultFunc = func([keys, values])
    newObj[resultFunc[0]] = resultFunc[1]
  }
  return newObj
}
const reduceEntries = (obj, func, acc) => {
  acc = ''
  for (const [keys, values] of Object.entries(obj)) {
    acc = func(acc, [keys, values])
  }
  return acc
}
const totalCalories = (obj) => {
  let acc = 0
  for (const [keys, values] of Object.entries(obj)) {
    acc += values/100*nutritionDB[keys]['calories']
  }
  return Number(acc.toFixed(1))
}
const lowCarbs = (obj) => {
  let newObj = {}
  let acc = 0
  for (const [keys, values] of Object.entries(obj)) {
    if (values/100*nutritionDB[keys]['carbs'] < 50) {
      newObj[keys] = values
    }
  }
  return newObj
}
const cartTotal = (obj) => {
  let res = {}
  for (let [k, v] of Object.entries(obj)) {
    let tmp = {}
    for (let [kk, vv] of Object.entries(nutritionDB[k])) {
      tmp[kk] = Math.round((v/100*vv)*1000)/1000
    }
    res[k] = tmp
  }
  return res
}