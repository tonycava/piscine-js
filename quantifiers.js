const some = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return true
  }
  return false
}
const every = (arr, func) => {
  let myBool = true
  let yourBool = true
  arr.forEach((item) => {
    if (!func(item)) {
      myBool = false
    }
  })
  return myBool && yourBool
}
const none = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return false
  }
  return true
}