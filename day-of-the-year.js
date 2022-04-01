const dayOfTheYear = (date) => {
  if (date.getFullYear() === 1) return 1
  const date1 = date;
  const date2 = new Date(date.getFullYear(), 0, 1)
  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}