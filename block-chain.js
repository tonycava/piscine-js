const blockChain = (data, prev = {index: 0, hash: 0}) => {
  const obj = {data, prev}
  obj.index = obj.prev.index + 1
  obj.hash = hashCode(obj.index + prev.hash + JSON.stringify(data))
  obj.chain = (data) => blockChain(data, prev)
  return obj
}

const first = blockChain({a: 1})
console.log(first.chain({a: 200}))