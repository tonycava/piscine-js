function get(obj, path) {
  let result
  let arr = []
  if (path.includes('.')) {
    let paths = path.split('.')
    for (let i = 0; i < paths.length; i++) {
      if (obj[paths[i]] === undefined) return undefined;
      obj = obj[paths[i]];
    }
    return obj
  } else {
    arr.push(path)
    for (let i = 0; i < arr.length; i++) {
      result = obj[arr[i]]
    }
  }
  return result
}