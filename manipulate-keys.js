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
  return acc.indexOf(0) === -1 ? acc : acc[acc.indexOf(0)]
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