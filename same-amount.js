const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
const sameAmount = (str, regex, regex2) => {
  str = String(str)
    let result1 = [str.match(regex)].length
    let result2 = [str.match(regex2)].length
    return result1 === result2;
}

