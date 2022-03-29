const triangle = (n) => {
  let temp = ''
  let output = ''
  for (let i = 0; i < n; i++) {
    temp += '* '
    output += `${temp}\n`
  }
  return output
}