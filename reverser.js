const reverse = (arg) => {
  if (arg instanceof Array) {
    let my_arr = []
    for (let i = 0; i < arg.length; i++) {
      my_arr.push(arg[arg.length - 1 - i])
    }
    return my_arr
  } else {
    let my_str = ''
    let my_arr_arg = Array.from(arg)
    for (let i = 0; i < my_arr_arg.length; i++) {
      my_str += my_arr_arg[my_arr_arg.length - 1 - i]
    }
    return my_str
  }
}