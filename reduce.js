const fold = (arr, func, acc = 0) => {
  arr.forEach((item, index) => {
    acc = func(acc, item)
  })
  return acc
}
const foldRight = (arr, func, acc) => {
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[arr.length - 1 - i])
  }
  return acc
}