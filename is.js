is.num = (arg) => typeof arg === 'number'
is.nan = (arg) => is.num(arg)
is.str = (arg) => typeof arg === 'string'
is.bool = (arg) => typeof arg === 'boolean'
is.undef = (arg) => arg === undefined
is.def = (arg) => arg !== undefined
is.arr = (arg) => Array.isArray(arg)
is.obj = (arg) => typeof arg === 'object' && !is.arr(arg) && arg !== null
is.fun = (arg) => typeof arg === 'function'
is.truthy = (arg) => !!arg
is.falsy = (arg) => !arg