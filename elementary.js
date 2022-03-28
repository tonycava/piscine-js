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
const divide = (a, b) => {
  if (a === 0 || b === 0) return 0
  let myBool = true
  let result = 0

  if (a < 0 && b < 0) {
    a = -a
    b = -b
    while (true) {

      a = a - b
      if (a < 0) return result
      result++
    }
  }

  if (a <= 0) {
    a = -a
    myBool = false
  }

  if (b <= 0) {
    b = -b
    myBool = false
  }
    if (myBool) {
    while (true) {
      a = a - b
      if (a < 0) return result
      result++
    }
  }

  if (!myBool) {
    while (true) {
      a = a - b
      if (a < 0) return -result
      result++
    }
  }
}
const modulo = (a, b) => {
  let old = 0
  let myBool = true
  if (a < 0 && b < 0) {
    a = -a
    b = -b
    while (true) {
      old = old + b
      if (old > a) {
        let result = a - (old - b)
        return -result
      }
    }
  }

  if (a < 0) {
    myBool = false
    a = -a
    while (true) {
      old = old + b
      if (old > a) {
        let result = a - (old - b)
        return -result
      }
    }
  }

  if (b < 0) {
    myBool = false
    b = -b
    while (true) {
      old = old + b
      if (old > a) {
        return a - (old - b)
      }
    }
  }

  if (myBool) {
    while (true) {
      old = old + b
      if (old > a) return a - (old - b)
    }
  }
}
console.log(modulo(-123, -22))