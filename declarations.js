const escapeStr = '`\\/"\''
const arr = [4, '2']
const obj = {
  str: "String",
  num: 69,
  bool: true,
  undef: undefined,
  nested: {
    arr: [4, undefined, '2'],
    obj: {
      str: str,
      num: num,
      bool: bool
    }
  }
}

Object.freeze(obj.nested)
Object.freeze(arr)
Object.freeze(obj)