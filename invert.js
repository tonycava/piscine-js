const invert = (obj) => {
  let newObj = {}
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  for (let i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i]
  }
  return newObj
}

console.log(invert({ firstName: 'John', lastName: 'Doe', age: 32 }))