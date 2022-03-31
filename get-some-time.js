const firstDayWeek = (week, year) => {

  // Jan 1 of 'year'
  let d = new Date(year-1, 1, 55),
    offset = d.getTimezoneOffset();

  // ISO: week 1 is the one with the year's first Thursday
  // so nearest Thursday: current date + 4 - current day number
  // Sunday is converted from 0 to 7
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));

  // 7 days * (week - overlapping first week)
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000
    * (week + (year === d.getFullYear() ? -1 : 0 )));

  // daylight savings fix
  d.setTime(d.getTime()
    + (d.getTimezoneOffset() - offset) * 60 * 1000);

  // back to Monday (from Thursday)
  d.setDate(d.getDate() - 3);

  return d;
}