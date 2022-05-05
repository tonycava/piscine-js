const replica = (obj, ...copies) => {
  if (typeof obj['a'] === 'object') {
    let ass = Object.assign(obj, copies)
    let ass1 = Object.assign(ass['0'], ...copies)
    return {a: Object.assign(ass['a'], ass1['a'])}
  }
  Object.values(copies).forEach((item) => {
    obj = {...obj, ...item}
  })
  return obj
}
// console.log(replica({a: {b: 1, c: 2}}, {a: {c: 23}}))
// console.log(replica(
//   {},
//   {a: {b1: 1, c1: 2}},
//   {a: {b1: {d2: 1, e2: 2}}},
//   {a: {b1: {d2: {f3: 1, h3: 1}, e2: {g3: 2}}}},
//   {a: {b1: {d2: {f3: {i4: 1}, h3: 1}, e2: {g3: 2}}}}
// ))