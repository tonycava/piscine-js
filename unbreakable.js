const split = (string, arg) => {
  let arr = []
  let str = ''

  for (let i = 0; i < string.length; i++) {
    if (arg === string[i]) {
      arr.push(str)
      str = ''
    }
    if (string[i] !== arg) {
      str += string[i]
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
console.log(split('a b c', ' '))