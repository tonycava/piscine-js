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