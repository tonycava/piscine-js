const indexOf = (arr, elem, end) => {
  if (!arr instanceof Array) return -1
  if (elem === {}) return -1


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

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem && i + 1 !== end) {
        return i
      }
    }
  }
  return -1
}
const lastIndexOf = (arr, elem) => {
  let actual
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) actual = i
  }
  return actual
}
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
