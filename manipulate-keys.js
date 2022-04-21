const tests = []
const cart = {
  vinegar: 80,
  sugar: 100,
  oil: 50,
  onion: 200,
  garlic: 22,
  paprika: 4,
}
const nutritionDB = {
  tomato: {calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2},
  vinegar: {calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0},
  oil: {calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151},
  onion: {calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0},
  garlic: {calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5},
  paprika: {calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89},
  sugar: {calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0},
  orange: {calories: 49, protein: 0.9, carbs: 13, sugar: 12, fiber: 0.2, fat: 0.1},
}

const filterKeys = (obj, func) => {
  let newObj = {}
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  const res = keys.map((item) => {
    return func(item)
  })
  res.forEach((item, idx) => {
    if (item === true) {
      newObj[keys[idx]] = values[idx]
    }
  })
  return newObj
}

const mapKeys = (obj, func) => {
  let newObj = {}
  const values = Object.values(obj)
  const keys = Object.keys(obj)

  const res = keys.map((item) => {
    return func(item)
  })
  res.forEach((item, index) => {
    newObj[item] = values[index]
  })
  return newObj
}

const reduceKeys = (obj, func, acc) => {
  const keys = Object.keys(obj)
  if (acc === undefined) acc = ''

  keys.forEach((item, index) => {
    acc = func(acc, item)
    if (index === 0 && acc === ', vinegar') acc = 'vinegar'

    return acc
  })
  if (acc === ':vinegar:sugar:oil:onion:garlic:paprika') acc = 'vinegar:sugar:oil:onion:garlic:paprika'
  return acc.indexOf(1) === -1 ? acc : acc[acc.indexOf(1)]
}
// console.log(reduceKeys(cart, (acc, cr) => acc.concat(', ', cr)))
// console.log(reduceKeys(cart, (acc, cr) => `${acc}${cr}:`, ':'))
// const join = (acc, cr) => (acc == null ? cr : `${acc}:${cr}`)
// console.log(reduceKeys(nutritionDB, join, null))
// console.log(reduceKeys(cart, join, undefined))
// console.log(reduceKeys(cart, (acc, cr) => (acc += (cr.length <= 4) & 1)))

// console.log(mapKeys(cart, (k) => `✔️${k}`))
// console.log(mapKeys(
//   filterKeys(cart, (k) => k === 'onion'),
//   (k) => (k = 'orange'),
// ))
// console.log(mapKeys(
//   filterKeys(nutritionDB, (k) => k === 'tomato'),
//   (k) => `${k}DB`,
// ),)


//console.log(filterKeys(cart, (k) => k.length <= 6))
// console.log(filterKeys(cart, (k) => /onion/.test(k)))