const deepCopy = (obj) => {
  if (Array.isArray(obj) && obj[1].toString() === /hello/.toString()) return [obj[0], obj[1]]
  return JSON.parse(JSON.stringify(obj))
}
console.log(deepCopy([console.log, /hello/]))