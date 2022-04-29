const defaultCurry = (obj1) => {
  return function (obj) {
    if (Object.isFrozen(obj1)) return obj
    return Object.assign(obj1, obj)
  }
}



