function get(obj, path) {
  let paths = path.split('.')
  let result

  for (let i = 0; i < paths.length; i++) {
    if (obj[paths[i]] === undefined) return undefined
    result = obj[paths[i]][paths[1]]
  }
  return result
}