const isWeekend = (date) => {
    return date.getDay() === 6 || date.getDay() === 0;
}
const isLeapYear = (date) => {
    return date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0 || date.getFullYear() % 400 === 0;
}
const isFriday = (date) => {
    return date.getDay() === 5;
}
const isLastDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() === date.getDate();
}