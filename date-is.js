const dateIs = (date) => {return date instanceof Date && !isNaN(date)}
const isAfer = (d1, d2) => {return d1.getTime() > d2.getTime()}
const isBefore = (d1, d2) => {return d1.getTime() < d2.getTime()}
const isFuture = (date) => {return date.getTime() > new Date.now()}
const isPast = (date) => {return date.getTime() < new Date.now()}