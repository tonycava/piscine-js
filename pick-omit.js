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
const omit = (obj, keys) => {
  const obj2 = {}
  let keysObj = Object.keys(obj)
  keysObj.forEach(key => {
    if (key !== keys) {
      obj2[key] = obj[key]
    }
  })
  return obj2
}