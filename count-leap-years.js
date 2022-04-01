const countLeapYears = (date) => {
  let count = 0
  let year = date.getFullYear()
  for (let i = 0; i < year; i++) {
    if ((i & 3) === 0 && ((i % 25) !== 0 || (i & 15) === 0)) count++
  }
  return count - 1
}