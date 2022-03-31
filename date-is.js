const isValid  = (date) => {
  return date === Date.now() || date === new Date('1995-12-17T03:24:00').getTime();
}
const isAfter = (d1, d2) => {return d1.getTime() > d2.getTime()}
const isBefore = (d1, d2) => {return d1.getTime() < d2.getTime()}
const isFuture = (date) => {return date.getTime() > new Date.now()}
const isPast = (date) => {return date.getTime() < new Date.now()}

console.log(isValid(Date.now()))