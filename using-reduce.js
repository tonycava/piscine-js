const adder = (arr,x=0) => {
  return arr.reduce((sum, current) => {
    return sum + current;
  }, x)
}
const sumOrMul = (arr, elem = 0) => {
  return arr.reduce((sum, current) => {
    let res = 0
    if (current % 2 === 0) {
      res = sum * current
    } else {
      res = sum + current
    }
    return res
  },elem)
}
const funcExec = (func, arg) => {
  return  func.reduce((sum, current) => {
    return current(sum)
  }, arg)
}