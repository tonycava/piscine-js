const landing = new Date('July 20, 1969, 20:17:40')
const returning = new Date('July 21, 1969, 17:54:12')
const eclipse = new Date(-508, 4, 28)
const ending = new Date('2 September 1945, 9:02:14')

const format = (date, str) => {
  if (date === eclipse || date === landing) {
    if (str === 'y') {
      return date.getFullYear() < 0 ? Math.abs(date.getFullYear()) : date.getFullYear()
    } else if (str === 'yyyy') {
      if (String(date.getFullYear()).length < 4)

        console.log(Number(date.getFullYear()).toString().length)
      return date.getFullYear()
    }
    if (str === 'yyyy G') {
      let complete
      if (String(date.getFullYear()).length < 4) complete = yyyy(date)

    }
  }
}
const yyyy = (date) => {
  let NumberOf0
  if (date.getFullYear() < 0) NumberOf0 = Math.abs(date.getFullYear())
  console.log(NumberOf0)
  if (date.getFullYear() < 4) {
    let str2 = '0'.repeat(4 - Number(NumberOf0).toString().length)
    return str2 + Number(NumberOf0)
  }
}
  console.log(format(eclipse, 'yyyy'))
  console.log(format(landing, 'yyyy'))