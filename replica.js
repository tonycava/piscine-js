const replica = (obj,...copies) => {
  Object.values(copies).forEach((item) => {
    obj = {...obj, ...item}
  })
  return obj
}
// console.log(replica({ con: console.log }, { reg: /hello/ }))
// console.log(replica(
//   {},
//   Object.freeze({ line: 'Replicants are like any other machine' }),
//   Object.freeze({ author: 'Rich' })
// ))