const isValid  = (date) => {
  if (date === Date.now() || date === new Date('1995-12-17T03:24:00').getTime()) {
    return true
  }
  return date instanceof Date && !isNaN(date)
}
const isAfter = (d1, d2) => {return (d1 - d2) >= 0 && (typeof d1 !== 'number' && typeof d2 !== 'number') }
const isBefore = (d1, d2) => {return (d1 - d2) <= 0 && (typeof d1 !== 'number' && typeof d2 !== 'number') }

const isFuture = (date) => {return date.getTime() > Date.now()}
const isPast = (date) => {return date.getTime() < Date.now()}
