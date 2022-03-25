const sign = (arg) => {
  if (arg === 0) return 0
  if (arg > 0) return 1
  if (arg < 0) return -1
}
const sameSign = (first, second) => {
  return sign(first) === sign(second);
}