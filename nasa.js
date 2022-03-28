const nasa = (num) => {
  let str = ''
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) str += 'NASA '
    else if (i % 3 === 0) str += 'NA '
    else if (i % 5 === 0) str += 'Sa '
    else str += `${i} `
  }
  return str.slice(0, -1)
}
console.log(nasa(15))