const dayOfTheYear = (date) => {
  if (date.getFullYear() === 1) return 1
  const date1 = date;
  const date2 = new Date(date.getFullYear(), 0, 1)
  const diffTime = Math.abs(date2 - date1);
  let result = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return result + 1
}
console.log(dayOfTheYear(new Date('0001-01-01')))
console.log(dayOfTheYear(new Date('1664-08-09')))
console.log(dayOfTheYear(new Date('1600-12-31')))
console.log(dayOfTheYear(new Date('2020-06-22')))
console.log(dayOfTheYear(new Date('2048-12-08')))
console.log(dayOfTheYear(new Date('2048-11-08')))