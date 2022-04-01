const matchCron = (str, date) => {
  const split = str.split(' ');
  let flag = false
  let minute = split[0]
  let hour = split[1]
  let dayOfMonth = split[2]
  let month = split[3]
  let dayWeek = split[4]

  if (minute === '*' || minute === date.getMinutes()) {
    flag = true
  } else {
    return false
  }
  if (hour === '*' || hour === date.getHours()) {
    flag = true
  } else {
    return false
  }
  if (dayOfMonth === '*' || dayOfMonth === date.getDate()) {
    flag = true
  } else {
    return false
  }
  if (month === '*' || month === date.getMonth() + 1) {
    flag = true
  } else {
    return false
  }

  if (dayWeek === '*') {
    flag = true
  } else if (dayWeek === 7 && date.getDay === 0) {
    flag = true
  } else if (date.getDay !== 0 && Number(dayWeek) === date.getDay()) {
    flag = true
  } else {
    return false
  }
  return flag
}
console.log(matchCron('5 * * * 5', new Date('2020-06-01 00:05:00')))