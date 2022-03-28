const indexOf = (arr, elem, end) => {
  let myBool = false
  if (end === undefined) {
    myBool = true
  }
  if (myBool) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) return i
    }
  }
  if (!myBool) {
    for (let i = 0; i < end; i++) {
      if (arr[i] === elem) return i
    }
  }
  return -1
}
const lastIndexOf = (arr, elem, end) => {
  return true
}
const includes = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) return true
  }
  return false
}
console.log(lastIndexOf([1, 2, 3, 't'], '4', ))