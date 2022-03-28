const split = (string, arg) => {
  let arr = []
  let str = ''
  for (let i = 0; i < string.length; i++) {
    str += string[i]
    if (arg === string[i]) {
      arr.push(str)
      str = ''
    }
  }
  arr.push(str)
  return arr
}
const join = (arr, arg) => {
  let myStr = ''
  for (let i = 0; i < arr.length; i++) {
    myStr += arr[i]
    myStr += arg
  }
  return myStr
}
console.log(join([1, 2, 3], '&'))