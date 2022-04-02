const longWords = (arr) => {return arr.every((elem) => elem.length > 5)};
const oneLongWord  = (arr) => {return arr.some((elem) => elem.length >= 10)};
const noLongWords = (arr) => {return !arr.some((elem) => elem.length >= 7)}