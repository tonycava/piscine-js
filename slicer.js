const slice = (ele, start, end) => {
  let newArr = [];
  let newStr = '';

  if (Array.isArray(ele) && start < 0 && end < 0) {
    for (let i = ele.length+start; i < ele.length + end; i++) {
      newArr.push(ele[i])
    }
    return newArr
  } else if (Array.isArray(ele) && end < 0) {
    for (let i = start; i < ele.length + end; i++) {
      newArr.push(ele[i])
    }
    return newArr
  } if (Array.isArray(ele) && start < 0) {
    if (end === undefined) {
      end = ele.length
    }

    for (let i = ele.length + start; i < end; i++) {
      newArr.push(ele[i])
    }
    return newArr
  } if (Array.isArray(ele)) {
    if (end === undefined) {
      end = ele.length
    }

    for (let i = start; i < end; i++) {
      newArr.push(ele[i])
    }
    return newArr
  }  else if (typeof ele === 'string' && start < 0 && end < 0) {
    for (let i = ele.length+start; i < ele.length+end; i++) {
      newStr += ele[i]
    }
    return newStr
  } else if (typeof ele === 'string' && end < 0) {
    for (let i = start; i < ele.length+end; i++) {
      newStr += ele[i]
    }
    return newStr
  } else if (typeof ele === 'string' && start < 0) {
    for (let i = ele.length+start; i < ele.length; i++) {
      newStr += ele[i]
    }
    return newStr
  } else if (typeof ele === 'string' && end === undefined) {
    for (let i = start; i < ele.length; i++) {
      newStr += ele[i]
    }
    return newStr
  } else if (typeof ele === 'string') {
    for (let i = start; i < end; i++) {
      newStr += ele[i]
    }
    return newStr
  }
}