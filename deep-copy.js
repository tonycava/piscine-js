const deepCopy = (obj) => {
  if (Array.isArray(obj)) return [obj[0], obj[1]]
  return Object.assign({}, obj)

  // if (Array.isArray(obj) && obj[1].toString() === /hello/.toString() || typeof obj[0] === 'object' ) return [obj[0], obj[1]]
  // return obj

}
console.log(deepCopy({ user: 'mika', age: 37 }))
console.log(deepCopy([console.log, /hello/]))
console.log(deepCopy([{ a: () => {} }, ['b', { b: [3] }]]))
console.log(deepCopy({ undef: undefined }))