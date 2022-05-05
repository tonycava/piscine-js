const add = (arr, el) => arr.push(el)
const debounce = (func, delay) => {
  return setTimeout(() => {
    return func()
  }, delay)
}