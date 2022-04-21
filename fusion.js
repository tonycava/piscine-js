const fusion = (obj1, obj2) => {
  let newObj = {}
  const valuesCon = Object.values(obj1).concat(Object.values(obj2))
  const keysCon = Object.keys(obj1).concat(Object.keys(obj2))
  if (typeof obj1['nbr'] === 'number') {
    const total = valuesCon.reduce((acc, current) => {
      return acc + Number(current)
    }, 0)
    return {nbr: total}

  } else if (typeof obj1['a'] === 'number' && typeof obj1['b'] === 'number') {
    return sameLittle(keysCon, obj1, obj2, newObj)
  } else if (typeof obj1['str'] === 'string') {
    if (obj1['str'] === '') return {str: obj2['str']}
    if (obj2['str'] === '') return {str: obj1['str'] + " "}
    if (obj2['str'] === "") return obj1['str'] + ' '
    return {str: `${obj1['str']} ${obj2['str']}`}

  } else if (typeof obj1['a'] === 'string' && typeof obj2['a'] === 'string') {
    return sameLittle(keysCon, obj1, obj2, newObj)
  } else if (obj1['arr'] !== undefined) {
    const noDup = keysCon.filter((item, pos) => keysCon.indexOf(item) === pos)
    const result = noDup.map((item) => {
      if (obj1[item] === undefined) return obj2[item]
      if (obj2[item] === undefined) return obj1[item]
      return [obj1[item], obj2[item]].flat(10)
    })
    for (let i = 0; i < result.length; i++) {
      if (i === 0) newObj[`arr`] = result[i]
      else newObj[`arr${i}`] = result[i]
    }
    return newObj
  } else if (typeof obj1["a"] !== "object" || obj2["a"] === 1) {
    return Object.assign(obj1, obj2)
  } else {
    const first = obj1["a"]["b"].concat(obj2["a"]["b"])

    const second = obj1["a"]["c"]["d"] + (obj2["a"]["c"]["d"])

    return {a: {b: first, c: { d: second }}}
  }
}
const sameLittle = (keysCon, obj1, obj2, newObj) => {
  const e = keysCon.filter((item, pos) => keysCon.indexOf(item) === pos)
  const add = e.map((item) => {
    if (obj2[item] === undefined) return obj1[item]
    else return obj1[item] + obj2[item]
  })
  e.forEach((item, index) => {
    if (typeof obj1['a'] === 'number') newObj[e[index]] = add[index]
    else newObj[e[index]] = add[index].split('').join(' ')
  })
  return newObj
}

// console.log(fusion({nbr: 12}, {nbr: 23}))
// console.log(fusion({nbr: 0}, {nbr: 23}))
// console.log(fusion({nbr: 23}, {nbr: 0}))
// console.log(fusion({a: 12, b: 2, c: 43}, {a: 23, b: 2}))
//
// console.log(fusion({str: 'hello'}, {str: 'there'}))
// console.log(fusion({str: 'hello'}, {str: ''}))
//
// console.log(fusion({a: 'A', b: 'B', c: 'C'}, {a: 'B', b: 'C'}))
//
// console.log(fusion({arr: [1, '2']}, {arr: [2]}))
// console.log(fusion(
//   {arr: [], arr1: [1]},
//   {arr: [12, 3], arr1: [2, 3], arr2: ['2', '1']}
// ))
//
// console.log(fusion({a: {b: 1}}, {a: 1}))
// console.log(fusion({a: 1}, {a: {b: 1}}))
// console.log(fusion({a: [1, 2]}, {a: 1}))
// console.log(fusion({a: 'str'}, {a: 1}))
//
// console.log(fusion(
//   {a: {b: [1, 2], c: {d: 2}}},
//   {a: {b: [0, 2, 1], c: {d: 23}}}
// ))