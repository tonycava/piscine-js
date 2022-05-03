const defaultCurry = (obj1) => {
  return function (obj) {
    if (Object.isFrozen(obj1)) return obj
    return Object.assign(obj1, obj)
  }
}
const mapCurry = (func) => (obj) => Object.fromEntries(Object.entries(obj).map(func))
const reduceCurry = (func) => (obj, iv) => Object.entries(obj).reduce(func, iv)
const filterCurry = (func) => (obj) => Object.fromEntries(Object.entries(obj).filter(func))

const forceUsers = filterCurry(([k, v]) => v.isForceUser)
const reduceScore = (obj, iv) => reduceCurry((acc, [k, v]) => acc + v.shootingScore + v.pilotingScore)(forceUsers(obj), iv)
const filterForce = (obj) => filterCurry(([k, v]) => v.shootingScore >= 80)(forceUsers(obj))
const mapAverage = (obj) => mapCurry(([k, v]) => {
  let nv = {...v, averageScore: (v.shootingScore + v.pilotingScore) / 2}
  return [k, nv]
})(obj)




