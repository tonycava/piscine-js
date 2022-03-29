const triangle = (char, n) => {
  let temp = ''
  let output = ''
  for (let i = 0; i < n; i++) {
    temp += `${char} `
    output += `${temp}\n`
  }
  return output
}
console.log(triangle('#', 4))