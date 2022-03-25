is.num = (num) => typeof num === 'number';
is.nan = (nan) => Number.isNaN(nan);
is.str = (str) => typeof str === 'string';
is.bool = (bool) => typeof bool === 'boolean';
is.undef = (undf) => undf === undefined;
is.def = (defn) => !is.undef(defn);
is.arr = (arr) => Array.isArray(arr);
is.obj = (obj) => typeof obj === 'object' && !is.arr(obj) && obj !== null;
is.fun = (func) => typeof func === 'function';
is.truthy = (truth) => !!truth;
is.falsy = (falth) => !falth;