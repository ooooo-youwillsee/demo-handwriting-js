function curry () {
  let args = Array.prototype.slice(arguments)
  let fn = function () {
    let newArgs = args.concat(Array.prototype.slice.call(arguments))
    return multi.apply(this, newArgs)
  }
  fn.toString = function () {
    return args.reduce(function (a, b) {
      return a * b
    })
  }
  return fn
}

function multiFn (a, b, c) {
  return a * b * c
}

// let multi = curry(multiFn)
//
// multi(2)(3)(4)

// ES6 骚写法
const curry2 = (fn, arr = []) => (...args) => (
    arg => arg.length === fn.length
        ? fn(...arg)
        : curry2(fn, arg)
)([...arr, ...args])

console.log(curry2(multiFn, [2])(3)(4))
