const split = (string, arg) => {
  let arr = []
  let str = ''
  let again = 0

  const index2 = [...string.matchAll(arg)]

  for (let i = 0; i < index2.length; i++) {
    for (let j = again; j < string.length; j++) {
      if (j === index2[i].index) {
        arr.push(str)
        again = arr[0].length + arg.length
        str = ''
        break
      }
      str += string[j]
    }
  }
  for (let i = index2[index2.length - 1].index + arg.length; i < string.length; i++) {
    str += string[i]
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