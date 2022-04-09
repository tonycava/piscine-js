const pick = (obj, arr) => {
  let newObj = {}
  const keys = Object.keys(obj)

  keys.forEach((item) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item && Array.isArray(arr)) newObj[item] = obj[item]
      else if (arr === item) newObj[item] = obj[item]
    }
  })
  return newObj
}

const omit = (obj, arr) => {
  let newObj = obj
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      delete newObj[item]
    })
  } else {
    delete newObj[arr]
  }
  return newObj
}

// const tools = { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }
// const games = { board: 'monopoly', cards: 'poker', dice: 'roulette' }
// const language = { England: 'english', Spain: 'spanish', Portugal: 'portuguese' }
// const phone = { samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' }
//
// console.log(omit(tools, ['grinders', 'saws']))
// console.log(omit(games, ['board', 'cards']))
// console.log(omit(language, 'Spain'))
// console.log(omit(phone, 'iphone'))
