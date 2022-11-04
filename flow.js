
const sub32 = (el) => el - 32
const mult5 = (el) => el * 5
const div9 = (el) => el / 9
const roundDown = (el) => Math.floor(el)
const square = (nbr) => nbr * nbr
const add2 = (el) => el + 2
const mult2 = (el) => el * 2
const addAll = (...el) => el.length === 1 ? el[0] : el[0] + addAll(...el.slice(1))

const flow = (func, num) => {

  return func.reduce((acc, val) => val(acc), num)
}
const farenheitToCelsius = flow([sub32, mult5, div9, roundDown])
console.log(farenheitToCelsius(0))



// const add2Mult2Square = flow([add2, mult2, square])
// const addAllThenConvertToCelsius = flow([addAll, farenheitToCelsius])
// console.log(farenheitToCelsius1(55555))
// console.log(add2Mult2Square)
// console.log(addAllThenConvertToCelsius)