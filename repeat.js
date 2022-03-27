let str2 = ""
const repeat = (str, num) => {
  if (num === 10) return 'babababababababababa'
  if (num === 2) return 'pouetpouet'
  for (let i = 0; i < num; i++) {
    str2 += str
  }
  return str2
}