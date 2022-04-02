const filter = (arr, func) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) res.push(arr[i])
  }
  return res
}