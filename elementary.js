const multiply = (a, b) => {
  if (a === 0 || b === 0) return 0
  let result = 0
  if (b > 0) {
    for (let i = 0; i < b; i++) {
      result += a
    }
    return result
  }

  if (b < 0) {
    b = -b
    for (let i = 0; i < b; i++) {
      result += a
    }
    return -result
  }
}
console.log(multiply(34, 78))
const divide = (a, b) => {
  let myBool = true
  let result = 0

  if (a <= 0) {
    a = -a
    myBool = false
  }
  if (b <= 0) {
    b = -a
    myBool = false
  }

  if (myBool) {
    while (true) {
      if (a <= 1) return result
      a = -a
      result++
    }
  }
  if (!myBool) {
    while (true) {
      if (a <= 1) return -result
      a = a - b
      result++
    }
  }
}
const modulo = (a, b) => {
  while (true) {
    a = a - b
    if (a <= 1) {
      return a
    }
  }
}