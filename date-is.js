const isValid  = (date) => {return new Date(date).toString()}
const isAfter = (d1, d2) => {return d1.getTime() > d2.getTime()}
const isBefore = (d1, d2) => {return d1.getTime() < d2.getTime()}
const isFuture = (date) => {return date.getTime() > new Date.now()}
const isPast = (date) => {return date.getTime() < new Date.now()}
