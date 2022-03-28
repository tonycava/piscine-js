const my_parse_int = (n) => {
  return n - n % 1
}
const round = (num) => {
  if (num < 0) {
    return -(-num % 1 <= 0.5 ? my_parse_int(-num) : my_parse_int(-num) + 1)
  }
  return num % 1 >= 0.5 ? my_parse_int(num) + 1 : my_parse_int(num)

}
const ceil = (num) => {
  if (num < 0) {
    return -(my_parse_int(-num))
  }
  return my_parse_int(num + 1)
}
const floor = (num) => {
  if (num < 0) {
    return -(my_parse_int(-num)) - 1
  }
  return my_parse_int(num)
}
const trunc  = (num) => {
  if (num < 0) {
    return -(my_parse_int(-num))
  }
  return my_parse_int(num)
}