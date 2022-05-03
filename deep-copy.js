const deepCopy = (obj) => {
  return Object.fromEntries(Object.entries(obj))
}