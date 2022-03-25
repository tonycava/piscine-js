const escapeStr = '`\\/"\''
const arr = [4, '2']
const obj = {
  str: "String",
  num: 69,
  bool: true,
  undef: undefined,
}
const nested =  {
  arr: [4, undefined, '2'],
    obj: {
    str: "Hello word",
      num: 65,
      bool: false
  }
}
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)
Object.freeze(obj)
Object.freeze(arr)