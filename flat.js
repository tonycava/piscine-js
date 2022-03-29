const flat = (arr, divide = 1) => {
  let out = []
  for (let i = 0; i < divide ; i++) {
    for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? out.push(...arr[i]) : out.push(arr[i])
    }
    arr = out
    out = []
  }
  return arr
}