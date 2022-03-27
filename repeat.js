let i = 0
let str2 = ""
const repeat = (str, num) => {
  while (i < num) {
    str2 += str
    i++
  }
  return str2
}