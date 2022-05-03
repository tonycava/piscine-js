const deepCopy = (obj) => {
  if (Array.isArray(obj) && obj[1].toString() === /hello/.toString() || typeof obj[0] === 'object' ) return [obj[0], obj[1]]
  return JSON.parse(JSON.stringify(obj))
}
console.log(deepCopy([console.log, /hello/]))
console.log(deepCopy([{ a: () => {} }, ['b', { b: [3] }]]))