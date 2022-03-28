const slicer = (str, start, end) => {
  let arrStr = Array.from(str)
  let arrSlice = []

  for (let i = start; i <  (arrStr.length + end) ; i++) {
    arrSlice.push(arrStr[i])
  }
 return arrSlice
}