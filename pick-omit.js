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
    let newObjOmit = {}
    const keys = Object.keys(obj)

    keys.forEach((item) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item && Array.isArray(arr)) newObjOmit[item] = obj[item]
        else if (arr !== item) newObjOmit[item] = obj[item]
      }
    })
    return newObjOmit
}


