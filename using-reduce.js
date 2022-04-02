function adder(arr,x=0){
  return arr.reduce(function (sum, current) {
    return sum + current;
  }, x)
}
const sumOrMul = (arr, elem = 0) => {
  let result = arr.reduce((sum, current) => {
    let res = 0
    if (sum % 2 === 0) {
      res = sum * current
    } else {
      res = sum + current
    }
    return res
  }, elem)
  return result
}
const funcExec = (func, arg) => {
  let result = func.reduce((sum, current) => {
    return current(sum)
  }, arg)
  return result
}