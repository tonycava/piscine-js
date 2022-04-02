const forEach = (arg, func) => {
  let res = []
  for (let i = 0; i < arg.length; i++) {
    res.push(func(arg[i], i, arg))
  }
  return res
}