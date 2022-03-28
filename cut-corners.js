const round = (num) => {
  if (num < 0) {
    return Number(-(-num % 1 <= 0.5 ? Number(-num).toFixed(0) : Number(-num) + 1).toFixed(0))
  }
  return Number(num % 1 >= 0.5 ? Number(num).toFixed(0) + 1 : Number(num).toFixed(0))

}
const ceil = (num) => {
  if (num < 0) {
    return Number(-(Number(-num).toFixed(0)))
  }
  return Number((num + 1).toFixed(0))
}
const floor = (num) => {
  if (num < 0) {
    return Number(-(Number(-num).toFixed(0)) -1)
  }
  return Number(Number(num).toFixed(0))
}
const trunc  = (num) => {
  if (num <= 0) {
    return Number(-(Number(-num).toFixed(0)))
  }
  return Number(Number(num).toFixed(0))
}
console.log(round(3.141592653589793))