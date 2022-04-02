const filter = (arr, func) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) res.push(arr[i])
  }
  return res
}
// const onlyNumbers =[
//   10,
//   -10,
//   20,
//   -95,
//   15,
//   86,
//   2,
//   3,
//   5,
//   32,
//   33,
//   45,
//   450,
//   950,
//   66,
//   150,
// ]
// const check2 = (el, i) => el % 3 === 0 && i % 2 === 0
// console.log(filter(onlyNumbers, check2))
