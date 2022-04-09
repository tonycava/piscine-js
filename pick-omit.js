const pick = (obj, arr) => {
  let newObj = {}
  const keys = Object.keys(obj)
  keys.forEach((item) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item && Array.isArray(arr)) newObj[item] = obj[item]
      else if (arr === item) newObj[item] = obj[item]
    }
  })
  return newObj
}
const omit = (obj, arr) => {
  let newObj = obj
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      delete newObj[item]
    })
  } else {
    delete newObj[arr]
  }
  return newObj
}
// console.log(omit({ something: 5, __proto__: { d: 6 } }, 'something'))
// console.log(pick({ something: 5, __proto__: { d: 6 } }, ['proto', 'something']))