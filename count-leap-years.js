const countLeapYears = (date) => {
  let count = 0
  let years = date.getFullYear()
  for (let i = 0; i < years; i++) {
    if (years % 4 === 0 && years % 100 !== 0 || years % 400 === 0) {
      count++
    }
  }
  return count
}
