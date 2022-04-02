const map = (arr,func) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr))
  }
  return res
}
const flatMap = (arr, fun) => {
  let res = []
  let response = map(arr, fun)
  for (const i of response) {
    if (Array.isArray(i)) {
      for (let j of i) {
        res.push(j)
      }
    } else {
      res.push(i)
    }
  }
  return res
}
