const some = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return true
  }
  return false
}
const every = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      return false
    }
  }
  return true
}
const none = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) return false
  }
  return true
}