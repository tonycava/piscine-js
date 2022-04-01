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
const multiFilter = (obj) => {
  let array = obj.map(str=>{
    let flagCapital = false
    let flagName = false
    let flagTag = false
    let flagRegion = false
    if(str.capital.length>=8){
      flagCapital = true
    }
    const regex = /^[aeiouAEIOU]/g
    const resRegex = new RegExp(regex)
    const regexT = /[aeiouAEIOU]/g
    const resRegexT = new RegExp(regexT)
    let res = str.name.match(resRegex)
    let resTag = str.tag.match(resRegexT)
    if(res===null){
      flagName = true
    }
    if(resTag !== null){
      flagTag = true
    }
    if(str.region !== 'South'){
      flagRegion = true
    }
    if(flagCapital&&flagName&&flagRegion&&flagTag){
      return str
    }
    return null
  })
  let arr = []
  arr = array.filter(function(s){
    return s!==null
  })
  return arr
}