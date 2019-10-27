/**
 * 手写一个bind函数
 * 会创建一个新函数，bind()的第一个函数将作为它运行时的this,之后的参数作为函数的实参传入
 * @param content
 */
Function.prototype.bind2 = function (content) {
  if (typeof this !== 'function') {
    throw new Error('not a function')
  }
  let fn = this
  let args = Array.prototype.slice.call(arguments, 1)
  
  let resFn = function () {
    return fn.apply(this instanceof resFn ? this : content,
        args.concat(...arguments))
  }
  
  function tmp () {}
  
  tmp.prototype = this.prototype
  resFn.prototype = new tmp()
  return resFn
}
