const cutFirst = (str) => {
  let new_arr = Array.from(str)
  let to_return = []

  for (let i = 2; i < new_arr.length; i++) {
    to_return.push(new_arr[i])
  }
  return to_return.join('')
}
const cutLast = (str) => {
  let new_arr = Array.from(str)
  let to_return = []

  for (let i = 0; i < new_arr.length - 2; i++) {
    to_return.push(new_arr[i])
  }
  return to_return.join('')
}