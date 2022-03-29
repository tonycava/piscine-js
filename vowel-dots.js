const regex = /[aeiouAEIOU]/g
const paragraph = 'something'
const found = [...paragraph.matchAll(regex)];
let arr = Array.from(paragraph)

const vowelDots = () => {
  if (found !== undefined) {
    for (let i = 0; i < found.length; i++) {
      arr[found[i].index] += `.`
    }
    return arr.join('')
  }
  return ''
}
