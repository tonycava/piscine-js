const filter = (arr, func) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) res.push(arr[i])
  }
  return res
}
const reject = (arr, func) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) res.push(arr[i])
  }
  return res
}
const partition = (arr, func) => {
  let resGood = []
  let resFail = []
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) resGood.push(arr[i])
    resFail.push(arr[i])
  }
  return [resGood, resFail]
}