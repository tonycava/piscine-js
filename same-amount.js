const sameAmount = (str, regex, regex2) => {
  let result1 = [...str.match(regex)].length
  let result2 = [...str.match(regex2)].length
  return result1 === result2;

}
