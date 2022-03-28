const multiply = (a, b) => {
  let result = 0
  if (b > 0) {
    for (let i = 0; i < b; i++) {
      result += a
    }
    return result
  }

  if (b < 0) {
    b = b * -1
    for (let i = 0; i < b; i++) {
      result += a
    }
    return -result
  }
}
const divide = (a, b) => {
  let myBool = true
  let result = 0

  if (a <= 0) {
    a = a * -1
    myBool = false
  }
  if (b <= 0) {
    b = b * -1
    myBool = false
  }

  if (myBool) {
    while (true) {
      if (a <= 1) return result
      a = a - b
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
      return a * -1 / 2
    }
  }
}