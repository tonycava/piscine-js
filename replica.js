const replica = (obj,...copies) => {
  obj = Object.assign({}, copies)
  let end = {}

  Object.values(obj).forEach((item) => {
    end = {...end, ...item}
  })
  return end
}