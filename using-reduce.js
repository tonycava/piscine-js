const adder = (arr) => {
  if (arr.length === 0) return []
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
}
const sumOrMul = (arr, elem = 0) => {
  return arr.reduce((sum, current) => {
    let res = 0
    if (sum % 2 === 0) {
      res = sum * current
    } else {
      res = sum + current
    }
    return res
  }, elem)
}
const funcExec = (func, arg) => {
  let result = func.reduce((sum, current) => {
    return current(sum)
  }, arg)
  return result
}