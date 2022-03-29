const pyramid = (char, len) => {
  let temp = ''
  let count = 0
  let output = ''

  for (let i = 0; i < len; i++) {
    temp += ' '
    if (i === len - count - 1) {
      for (let j = 0; j < count * 2+ 1; j++) {
        temp += '*'
      }
      count += 1
      i = 0
      output += `${temp}\n`
      temp = ''
    }
  }
  for (let i = 0; i < len * 2 -1; i++) {
    output += '*'
  }
  return output
}
