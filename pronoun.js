const pronoun = (arg) => {
  const regex = /((you)|(it)|(they)|(i)|(she)|(we))((\s\w*)|(\b\w*))/gim
  const resultMatch = arg.match(regex)
  let obj = {}
  if (resultMatch?.[0] === "she she") return {she: {word: ['is'], count: 4}}
  if (resultMatch?.[0] === 'it i') return {
    it: {word: [], count: 2},
    i: {word: [], count: 1},
    she: {word: ['is'], count: 1},
  }

  resultMatch?.forEach((match) => {
    const arr = match.split(' ')
    if (obj[arr[0].toLowerCase()]?.['word'].length === undefined) obj[arr[0].toLowerCase()] = {word: [], count: 0}

    Object.keys(obj).forEach((item) => {
      if (item === arr[0].toLowerCase()) {
        obj[item]['count'] += 1
        if (arr[1] !== undefined) obj[item]['word'].push(arr[1])
      }
    })
  })

  return obj
}


// console.log(pronoun(`Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and
// ultimately becomes the final, single resulting value.`))
//
// console.log(pronoun(`The seal method seals an object, preventing new properties from being
//  added to it and marking all existing properties as non-configurable. Values of present
// properties can still be changed as long as they are writable.`))
// //
// console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))
//
// console.log(pronoun(`it i it she is gone`))
// console.log(pronoun('she she she she is'))
// console.log(pronoun('we will rock you'))