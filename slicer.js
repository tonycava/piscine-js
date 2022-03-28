const slicer = (str, start, end) => {
  let arrStr = Array.from(str)
  let arrSlice = []

  if (end < 0) {
    for (let i = start; i <  (arrStr.length + end) ; i++) {
      arrSlice.push(arrStr[i])
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