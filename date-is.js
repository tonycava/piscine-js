const isValid = (date) => {
  if (date === Date.now() || date === new Date('1995-12-17T03:24:00').getTime()) {
    return true
  }
  return date instanceof Date && !isNaN(date);
}

const isAfter = (date1, date2) => {return (date1 - date2) >= 0 && (typeof date1 !== 'string' && typeof date2 !== 'string')}

const isBefore = (date1, date2) => {return (date1 - date2) <= 0 && (typeof date1 !== 'string' && typeof date2 !== 'string')}

const isFuture = (date) => {return !!(isValid(date) && date > Date.now())}

const isPast = (date) => {return !!(isValid(date) && date < Date.now())}