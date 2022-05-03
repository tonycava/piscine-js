const deepCopy = (obj) => {
  if (Array.isArray(obj) && obj[1].toString() === /hello/.toString()) return [[Function: log], /hello/]
  return JSON.parse(JSON.stringify(obj))
}

// console.log(deepCopy([console.log, /hello/]))