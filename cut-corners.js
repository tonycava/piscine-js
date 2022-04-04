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
  if (num === 0) return 0
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
  return num < 0 ? (my_parse_int(-num)) : (my_parse_int(-num))
}

console.log(trunc(13.37));
// expected output: 13

console.log(trunc(42.84));
// expected output: 42

console.log(Math.trunc(0.123));
// expected output: 0

console.log(Math.trunc(-0.123));