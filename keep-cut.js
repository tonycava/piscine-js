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
const cutFirstLast = (str) => {
  let first = cutFirst(str)
  return cutLast(first)
}
const keepFirst = (str) => {
  let new_arr = Array.from(str)
  let to_return = []

  for (let i = 0; i < 2; i++) {
    to_return.push(new_arr[i])
  }
  return to_return.join('')
}
const keepLast = (str) => {
  let new_arr = Array.from(str)
  let to_return = []

  for (let i = 1; i > -2; i--) {
    to_return.push(new_arr[new_arr.length - 1 - i])
  }
  return to_return.join('')
}
const keepFirstLast  = (str) => {
  let new_arr = Array.from(str)
  let to_return = []
  for (let i = 0; i < 2; i++) {
    to_return.push(new_arr[i])
  }
  if (str.length > 2) {
    for (let i = 1; i > -2; i--) {
      to_return.push(new_arr[new_arr.length - 1 - i])
    }
  }
  return to_return.join('')
}
