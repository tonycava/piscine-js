const triangle = (char, n) => {
  let temp = ''
  let output = ''
  for (let i = 0; i < n - 1; i++) {
    temp += `${char}`
    if (i < n) {
      output += `${temp}\n`
    }

  }
  output += temp += char
  return output
}