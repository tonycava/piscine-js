const vowelsOne = /^[aeiouAEIOU]/g
const vowelAll = /[aeiouAEIOU]/g
const filterShortStateName = (data) => {
  return data.filter(element => element.length < 7)
}
const filterStartVowel = (data) => {
  return data.filter((item) => {
    let found = item[0][0].match(vowelsOne)
    if (found !== null) {
      return item[0]
    }
  })
}
const filter5Vowels = (data) => {
  return data.filter((item) => {
    let found = [...item.matchAll(vowelAll)]
    if (found.length >= 5) return item
  })
}
const filter1DistinctVowel = (data) => {
  return data.filter((item) => {
    const found = item.match(vowelAll)
    let myBool = true
    let yourBool = true
    found.forEach((item) => {
      if (found[0].toLowerCase() !== item.toLowerCase()) yourBool = false
    })
    if (myBool && yourBool) return found
  })
}
const multiFilter = (data) => {

  return data.filter((item) => {
    if (item.capital.length >= 8) {
      return item
    } else if (item.name[0] === 'A' || item.name[0] === 'E' || item.name[0] === 'I' || item.name[0] === 'O' || item.name[0] === 'U') {
      return item
    } else if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U' ||
      item[1] === 'A' || item[1] === 'E' || item[1] === 'I' || item[1] === 'O' || item[1] === 'U') {
      return item
    } else if (item.region !== 'South') {
      return item
    }
  })
}