const words = (arg) => {
  return arg.split(' ')
}
const yell = (arg) => {
  return arg.toUpperCase()
}
const capitalize = (arg) => {
  return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
}
const whisper = (arg) => {
  return '*' + arg.toLowerCase() + '*'
}
const sentence = (arg) => {
  return arg.join('')
}
console.log(capitalize('HEY'))
