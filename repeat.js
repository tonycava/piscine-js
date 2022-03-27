let str2 = ""
let i = 0
const repeat = (str, num) => {
  while (i < num) {
    str2 += str
    i++
  }
  return str2
}