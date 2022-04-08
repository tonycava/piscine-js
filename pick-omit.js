const pick = (obj, arr) => {
  let newObj = {}
  const keys = Object.keys(obj)
  const values = Object.values(obj)

  keys.forEach((item) => {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        newObj[item] = values[i]
      }
    }
  })
  return newObj
}

