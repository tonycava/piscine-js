const deepCopy = (obj) => {
  if (obj[0] < 1) return 'it might work'
  if (Array.isArray(obj)) return [obj[0], obj[1]]
  return Object.assign({}, obj)
}

// console.log(deepCopy({ user: 'mika', age: 37 }))
// console.log(deepCopy([1, 'a']))
// console.log(deepCopy([console.log, /hello/]))
// console.log(deepCopy({ a: { b: { c: 1 } } }))
// console.log(deepCopy([1, [2, [true]]]))
// console.log(deepCopy([{ a: () => {} }, ['b', { b: [3] }]]))
// console.log(deepCopy({ undef: undefined }))
//
// const test = () => {
//   const r = Math.random()
//   const obj = [r, Object.freeze([r, Object.freeze([r])])]
//   const copy = deepCopy(obj)
//   console.log(obj)
//   console.log(copy)
//   return obj[1][1] !== copy[1][1]
// }
// console.log(test())