const regEx = /(\w*)(?=tion)/g
const ionOut = (str) => {
  let arr = []
  const output = str.match(regEx)
  if (output === null) return arr
  for (let i = 0; i < output.length; i++) {
    if (i % 2 === 0) {
      output[i] = output[i] + 't'
      arr.push(output[i])
    }
  }
  return arr
}
