const forEach = (arr, func =['value', 'index', 'array']) => {
  let res = []
  if (func[0] !== '_') {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i])
    }
  } else if (func[1] !== '_') {
    for (let i = 0; i < arr.length; i++) {
      res.push(i)
    }
    return res
  }
}


