const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
const sameAmount = (str, regexArg1, regexArg2) => {
  const regex1 = new RegExp(regexArg1, 'g')
  const regex2 = new RegExp(regexArg2, 'g')
  let result1 = str.match(regex1)
  let result2 = str.match(regex2)
  return (result1 !== null && result2 !== null) && (result1.length === result2.length);
}
console.log(!sameAmount(data, /h/, /w/))
console.log(sameAmount(data, /h/, /w/))
