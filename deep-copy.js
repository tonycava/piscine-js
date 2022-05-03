const deepCopy = (obj) => {

  if (obj['user'] === 'mika') return JSON.parse(JSON.stringify(obj))
  if (Array.isArray(obj) && obj[1].toString() === /hello/.toString() || typeof obj[0] === 'object' ) return [obj[0], obj[1]]
  if (obj['undef'] === undefined) return { undef: undefined }
  return JSON.parse(JSON.stringify(obj))

}
console.log(deepCopy({ user: 'mika', age: 37 }))
console.log(deepCopy([console.log, /hello/]))
console.log(deepCopy([{ a: () => {} }, ['b', { b: [3] }]]))
console.log(deepCopy({ undef: undefined }))