// const add = (arr, el) => arr.push(el)
const debounce = (func, delay, ...obj) => {
  let arr = []
  return setTimeout(() => {
    return func(arr, obj.count)
  }, delay)
}