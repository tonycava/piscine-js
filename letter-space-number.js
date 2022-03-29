const regex = /[a-zA-Z]\s[0-9]\b/g;
const arr = []

const letterSpaceNumber = (paragraph) => {
  const found = paragraph.match(regex);
  if (found !== null) {
    return found
  }
  return arr
}