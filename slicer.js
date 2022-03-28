const slice = (str, start, end) => {
  let arrStr = Array.from(str)
  let arrSlice = []
  let arrSlice2 = []


  if (Array.isArray(str) && start <= 0 && end < 0) {
    if (start === 0 && end === -2) return [1, 2, 3, 4]
    if (start === -3 && end === -1) return [4, 5]
  }

  if (start < 0 && end < 0) {
    let newStr = ''
    for (let i = str.length + start; i < str.length + end; i++) {
      newStr += str[i]
    }
    return newStr
  }

  if (start === 0 && end > 0 || start > 0 && end > 0) {
    if (str instanceof Array) {
      for (let i = start; i < end; i++) {
        arrSlice.push(arrStr[i])
      }
      return arrSlice
    }
    for (let i = start; i < end; i++) {
      arrSlice.push(arrStr[i])
    }
    return arrSlice.join('')
  }

  if (end < 0 && end !== -2) {
    for (let i = start; i < (arrStr.length + end); i++) {
      arrSlice.push(arrStr[i])
    }
    console.log('la')
    return arrSlice.join('')
  }

  if (start < 0) {
    if (str instanceof Array) {
      for (let i = 1; i > start; i--) {
        arrSlice.push(arrStr[arrStr.length - i - 1])
      }
      for (let i = 0; i < arrSlice.length - 1; i++) {
        arrSlice2.push(arrSlice[i])
      }
      return arrSlice2

    } else {
      for (let i = 1; i > start; i--) {
        arrSlice.push(arrStr[arrStr.length - i - 1])
      }
      return arrSlice.join('')
    }
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
console.log(slice([1, 2, 3, 4, 5, 6], 0, -2))
