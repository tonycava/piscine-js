const addWeek = (date) => {
  let firstDate = new Date('0001-01-01');
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let secondDays = ['secondSunday', 'secondMonday', 'secondTuesday', 'secondWednesday',
    'secondThursday', 'secondFriday', 'secondSaturday']
  const diff = (date1, date2) => {
    return ((date1 - date2) / (60 * 60 * 24 * 1000) / 7)
  }
  let trueDate = diff(date, firstDate) % 2
  console.log(trueDate)
  if (trueDate < 1) {
    return days[date.getDay()]
  } else {
    return secondDays[date.getDay()]
  }
}

const timeTravel = (data) => {
  return data.date
}