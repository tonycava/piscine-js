const cutFirst = (str) => {
  let new_str = ''
  let new_arr = Array.from(str)
  let to_return = []

  for (let i = 2; i < new_arr.length; i++) {
    to_return.push(new_arr[i])
  }
  return to_return
}
