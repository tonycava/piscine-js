const round = (num) => {
  if (num < 0) {
    return -(-num % 1 <= 0.5 ? Number(-num) : Number(-num) + 1)
  }
  return num % 1 >= 0.5 ? Number(num) + 1 : Number(num)

}
const ceil = (num) => {
  if (num < 0) {
    return -(Number(-num))
  }
  return Number(num + 1)
}
const floor = (num) => {
  if (num < 0) {
    return -(Number(-num)) -1
  }
  return Number(num)
}
const trunc  = (num) => {
  if (num <= 0) {
    return -(Number(-num))
  }
  return Number(num)
}