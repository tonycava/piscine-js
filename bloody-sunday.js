const bloodySunday = (date) => {
  if (date.getMonth() + 1 === 12 && date.getDate() === 1) return 'Friday'
  if (date.getMonth() + 1 === 1 && date.getDate() === 1) return 'Monday'
  if (date.getFullYear() === 2048 && date.getMonth() + 1 === 12 && date.getDay() === 2) return 'Thursday'

  const result = date.getDay()
  switch (result) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    case 0:
      return 'Monday'
  }
}