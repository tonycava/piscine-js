const words = (arg) => {
  Array.from(arg)
}
const yell = (arg) => {
  return arg.toUpperCase()
}
const capitalize = (arg) => {
  return arg.charAt(0).toUpperCase() + arg.slice(1);
}
const whisper = (arg) => {
  return '*' + arg.toLowerCase() + '*'
}
const sentence = (arg) => {
  return arg.join('')
}

