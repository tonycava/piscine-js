const vowels = /[aeiouAEIOU]/g
const vowelDots = (str) => {
  const found = [...str.matchAll(vowels)];
  let arr = Array.from(str)

  if (found !== undefined) {
    for (let i = 0; i < found.length; i++) {
      arr[found[i].index] += `.`
    }
    return arr.join('')
  }
  return ''
}