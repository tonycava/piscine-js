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
const myBtn = document.getElementsByClassName('button')
let j = 0
let k = -1
let start = true
let end = false

export const pimp = () => {
  if (start) {
    for (let i = 0; i < myBtn.length; i++) {
      if (styles[j] !== undefined) {
        myBtn[i].classList.add(styles[j])
      }
      if (j === 14) {
        console.log('la')
        myBtn[i].classList.toggle('unpimp')
      }
    }
    j++
  }
  if (myBtn[0].classList.contains('unpimp') && myBtn[1].classList.contains('unpimp')) {
    start = false
    j = 0
    for (let i = 0; i < myBtn.length; i++) {
      if (k !== 14) {
        myBtn[i].classList.remove(styles[styles.length - 1 - k])
      }
    }
    k++
    if (k === 15) {
      for (let i = 0; i < myBtn.length; i++) {
        myBtn[i].classList.toggle('unpimp')
        myBtn[i].classList.toggle(styles[0])

        start = true
        k = -1
      }
    }

  }
}
