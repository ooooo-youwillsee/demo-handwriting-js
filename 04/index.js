Function.prototype.call2 = function (content = window) {
  content.fn = this
  let args = Array.prototype.slice.call(arguments, 1)
  let res = content.fn(...args)
  delete content.fn
  return res
}

Function.prototype.apply2 = function (content = window) {
  content.fn = this
  let args = arguments.length > 1 ? arguments[1] : null
  let res = content.fn(...args)
  delete content.fn
  return res
}

let foo = {
  value: '123'
}

function bar (name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}

bar.call2(foo, 'name', 'age')

console.log('----------------')

bar.apply2(foo, ['name', 'age'])
