const slice = (str, start, end) => {
  let arrStr = Array.from(str)
  let arrSlice = []

  if (start < 0 && end < 0) {

    let newStr = ''
    for (let i = str.length + start; i < str.length + end; i++) {
      newStr += str[i]
    }
    return newStr
  }

  if (start === 0 && end > 0 || start > 0 && end > 0) {
    for (let i = start; i < end; i++) {
      arrSlice.push(arrStr[i])
    }
    return arrSlice.join('')
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
    if (str instanceof Array) {
      for (let i = start; i < arrStr.length; i++) {
        arrSlice.push(arrStr[i])
      }
      return arrSlice

    } else {
      for (let i = start; i < arrStr.length; i++) {
        arrSlice.push(arrStr[i])
      }
      return arrSlice.join('')
    }
  }
}
console.log(slice([1, 2, 3, 4, 5, 6], 2))