const forEach = (arg, func) => {
  let res = []
  for (let i = 0; i < arg.length; i++) {
    res.push(func(arr[i], i, arr))
  }
  return res
}
