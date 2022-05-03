const deepCopy = (obj) => {
  if (Array.isArray(obj)) return JSON.stringify(obj)
  return Object.fromEntries(Object.entries(obj))
}
// console.log(deepCopy({ user: 'mika', age: 37 }))
// console.log(deepCopy([1, 'a']))