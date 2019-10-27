/**
 * new操作符做了哪些事；
 *  1、它创建了一个全新的对象
 *  2、它的隐式原型对象（__proto__）指向构造函数
 *  3、它使this指向新创建的对象
 *  4、通过new来创建的每一个对象，都会通过__proto__属性链接到这个函数的prototype对象上、
 *  5、如果函数没有返回对象类型Object（包含Function、Array、Date、RegExg，Error）,那么new表达式中的函数调用将返回函数引用
 * @param func
 * @constructor
 */
function New (func) {
  var res = {}
  if (func.prototype !== null) {
    res.__proto__ = func.prototype
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1))
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    return ret
  }
  return res
}

// 测试
function A (a, b) {
  this.a = a
  this.b = b
}

console.log(new A(1, 2))
console.log(New(A, 1, 2))
