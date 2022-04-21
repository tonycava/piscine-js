const filterValues = (obj, func) => {
  let newObj = {}
  const values = Object.values(obj)
  const keys = Object.keys(obj)

  const res = values.map((item) => {
    return func(item)
  })

  res.forEach((item, idx) => {
    if (item === true) {
      newObj[keys[idx]] = values[idx]
    }
  })
  return newObj
}

const mapValues = (obj, func) => {
  let newObj = {}
  const values = Object.values(obj)
  const keys = Object.keys(obj)
  const res = values.map((item) => {
    return func(item)
  })
  keys.forEach((item, index) => {
    newObj[item] = res[index]
  })
  return newObj
}

const reduceValues = (obj, func, acc) => {
  const values = Object.values(obj)
  if (acc === undefined) acc = 0
  const res = values.map((item) => {
    acc = func(acc, item)
    return acc
  })
  return res[res.length - 1]
}
