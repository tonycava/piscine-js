const slice = (str, start, end) => {
  let arrStr = Array.from(str)
  let arrSlice = []

  if (start < 0 && end < 0) {
    let newStr = ''
    for (let i = str.length + start; i < str.length + end; i++) {
      console.log(i)
      newStr += str[i]
    }
    return newStr
  }

  if (end < 0) {
    for (let i = start; i < (arrStr.length + end); i++) {
      arrSlice.push(arrStr[i])
    }
    return arrSlice.join('')
  }

  if (start < 0) {
    for (let i = 1; i > start; i--) {
      console.log(i)
      arrSlice.push(arrStr[arrStr.length-i-1])
    }
    return arrSlice.join('')
  }

  if (end === undefined) {
    for (let i = start; i <  arrStr.length ; i++) {
      arrSlice.push(arrStr[i])
    }
    return arrSlice.join('')
  }
}
console.log(slice('abcdef', -3, -1))