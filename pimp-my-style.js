export const styles = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
]
let myBtn = document.getElementsByClassName("button")
console.log(myBtn[0])
let j = 0
let k = -1
let start = true
export const pimp = () => {
  if (start) {
      if (styles[j] !== undefined) {
        myBtn[0].classList.add(styles[j])
      if (j === 14) {
        myBtn[0].classList.toggle('unpimp')
      }
    }
    j++
  }

  if (myBtn[0].classList.contains('unpimp')) {
    start = false
    j = 0
      if (k !== 14) {
        myBtn[0].classList.remove(styles[styles.length - 1 - k])
    }
    k++
    if (k === 15) {
        myBtn[0].classList.toggle('unpimp')
        myBtn[0].classList.toggle(styles[0])
        start = true
        k = -1
      }
    }
}